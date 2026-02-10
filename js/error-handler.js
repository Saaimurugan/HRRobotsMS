/**
 * HR Robots - Global Error Handler
 * Prevents console errors and provides graceful degradation
 */

(function() {
    'use strict';
    
    // Suppress third-party script errors
    var originalError = window.onerror;
    window.onerror = function(msg, url, lineNo, columnNo, error) {
        // Suppress errors from external domains we don't control
        if (url && (url.includes('vimeo') || url.includes('google') || url.includes('gtag'))) {
            return true; // Suppress error
        }
        
        // Call original error handler if it exists
        if (originalError) {
            return originalError(msg, url, lineNo, columnNo, error);
        }
        
        return false;
    };
    
    // Handle resource loading errors
    window.addEventListener('error', function(e) {
        if (e.target !== window) {
            var elem = e.target;
            
            // Handle image loading errors
            if (elem.tagName === 'IMG') {
                console.warn('Image failed to load:', elem.src);
                // Optionally set a placeholder image
                // elem.src = 'images/placeholder.png';
            }
            
            // Handle script loading errors
            if (elem.tagName === 'SCRIPT') {
                console.warn('Script failed to load:', elem.src);
            }
            
            // Handle CSS loading errors
            if (elem.tagName === 'LINK' && elem.rel === 'stylesheet') {
                console.warn('Stylesheet failed to load:', elem.href);
            }
        }
    }, true);
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.warn('Unhandled promise rejection:', e.reason);
        e.preventDefault();
    });
    
    // Check for critical resources after page load
    window.addEventListener('load', function() {
        // Check jQuery
        if (typeof jQuery === 'undefined') {
            console.error('Critical: jQuery failed to load');
        }
        
        // Check Bootstrap
        if (typeof bootstrap === 'undefined' && typeof $ === 'undefined') {
            console.warn('Bootstrap may not have loaded correctly');
        }
    });
    
    // Polyfill for older browsers
    if (!window.console) {
        window.console = {
            log: function() {},
            warn: function() {},
            error: function() {},
            info: function() {},
            debug: function() {}
        };
    }
    
})();
