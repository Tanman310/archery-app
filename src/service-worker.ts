// Placeholder service worker file — use Workbox or Vite PWA plugin for production.
// This file is intentionally minimal.
self.addEventListener('install', (event: any) => {
    // skipWaiting() etc can be used in advanced flows
    console.log('Service worker install')
})
self.addEventListener('activate', (event: any) => console.log('Service worker activate'))
self.addEventListener('fetch', (event: any) => {
    // Optionally implement runtime caching for API/static assets
})