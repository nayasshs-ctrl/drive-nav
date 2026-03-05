// DRIVE PWA — Service Worker (심플 버전)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

// 캐시 없이 모든 요청 네트워크로 직접 처리
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).catch(() => new Response('offline', {status: 503})));
});
