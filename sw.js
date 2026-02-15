self.addEventListener('install', (e) => {
  console.log('SW instalado');
});

self.addEventListener('fetch', (e) => {
  // Esto permite que la app funcione sin internet una vez instalada
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});