/**
 * HR Robots - Email Protection Utility
 * Protects email addresses from spam harvesters while maintaining usability
 */

(function() {
    'use strict';
    
    /**
     * Decode and display protected email addresses
     * @param {string} elementId - ID of the element to populate with email
     * @param {string} user - Email username part
     * @param {string} domain - Email domain part
     * @param {string} tld - Top-level domain (e.g., 'com', 'org')
     * @param {boolean} createLink - Whether to create a mailto link (default: true)
     */
    function displayProtectedEmail(elementId, user, domain, tld, createLink) {
        createLink = createLink !== false; // Default to true
        
        var email = user + '@' + domain + '.' + tld;
        var element = document.getElementById(elementId);
        
        if (!element) {
            console.warn('Email protection: Element not found:', elementId);
            return;
        }
        
        if (createLink) {
            var link = document.createElement('a');
            link.href = 'mailto:' + email;
            link.textContent = email;
            link.style.color = 'inherit';
            link.style.textDecoration = 'none';
            link.setAttribute('aria-label', 'Send email to ' + email);
            element.appendChild(link);
        } else {
            element.textContent = email;
        }
    }
    
    /**
     * ROT13 email decoder (alternative obfuscation method)
     * @param {string} encoded - ROT13 encoded email
     * @returns {string} Decoded email
     */
    function rot13Decode(encoded) {
        return encoded.replace(/[a-zA-Z]/g, function(c) {
            return String.fromCharCode(
                (c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
            );
        });
    }
    
    /**
     * Base64 email decoder (alternative obfuscation method)
     * @param {string} encoded - Base64 encoded email
     * @returns {string} Decoded email
     */
    function base64Decode(encoded) {
        try {
            return atob(encoded);
        } catch (e) {
            console.error('Email protection: Base64 decode failed', e);
            return '';
        }
    }
    
    /**
     * Display email from data attribute
     * Looks for elements with data-email attribute and decodes them
     */
    function displayDataEmails() {
        var elements = document.querySelectorAll('[data-email]');
        
        elements.forEach(function(element) {
            var encoded = element.getAttribute('data-email');
            var method = element.getAttribute('data-method') || 'base64';
            var email = '';
            
            switch(method) {
                case 'rot13':
                    email = rot13Decode(encoded);
                    break;
                case 'base64':
                    email = base64Decode(encoded);
                    break;
                default:
                    email = encoded;
            }
            
            if (email) {
                var link = document.createElement('a');
                link.href = 'mailto:' + email;
                link.textContent = email;
                link.style.color = 'inherit';
                link.style.textDecoration = 'none';
                element.appendChild(link);
            }
        });
    }
    
    /**
     * Initialize email protection on page load
     */
    function init() {
        // Display data-email elements
        displayDataEmails();
        
        // Display specific protected emails
        // Example: displayProtectedEmail('contact-email', 'info', 'example', 'com');
    }
    
    // Auto-initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Expose utility functions globally if needed
    window.EmailProtection = {
        display: displayProtectedEmail,
        rot13: rot13Decode,
        base64: base64Decode
    };
    
})();
