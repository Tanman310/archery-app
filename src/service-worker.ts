// Placeholder service worker file — use Workbox or Vite PWA plugin for production.
// This file is intentionally minimal.
self.addEventListener('install', () => {
    // skipWaiting() etc can be used in advanced flows
    console.log('Service worker install')
})
self.addEventListener('activate', () => console.log('Service worker activate'))
self.addEventListener('fetch', () => {
    // Optionally implement runtime caching for API/static assets
})