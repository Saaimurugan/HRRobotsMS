/**
 * HR Robots - Service Worker for Performance Optimization
 * Caches static assets for faster loading and reduces HTTP requests
 */

const CACHE_NAME = 'hrrobots-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/bootstrap.css',
  '/css/combined.min.css',
  '/js/jquery-3.4.1.min.js',
  '/js/bootstrap.js',
  '/js/combined.min.js',
  '/images/logo.png',
  '/images/slider-img.png',
  '/images/favicon.ico',
  '/images/18775.png',
  '/images/9837494.png',
  '/images/experience-img.jpg',
  '/images/about-img.jpg',
  '/images/f3.png',
  '/images/f4.png',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .catch(function(error) {
        console.log('Cache install failed:', error);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache first (Cache-First Strategy)
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response immediately
        if (response) {
          return response;
        }
        
        // Clone the request
        var fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(
          function(response) {
            // Check if valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            var responseToCache = response.clone();
            
            // Cache the new resource
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          }
        );
      })
      .catch(function() {
        // Fallback for offline
        return caches.match('/index.html');
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  var cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  return self.clients.claim();
});

