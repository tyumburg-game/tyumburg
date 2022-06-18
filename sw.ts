/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />

const CACHE = 'tymburg-game-cache-v1';

const URLS = [
  '/',
  '/game',
  "https://fonts.gstatic.com/s/play/v17/6aez4K2oVqwIvtg2H68T.woff2",
  "/bundle.js",
  "/main.css",
  "index.html",
  "/profile",
  "/sign-in",
  "/sign-up",
  "/forum",
  "/leaderbord",
];

const sw = self as unknown as ServiceWorkerGlobalScope & typeof globalThis;

sw.addEventListener("install", event => {
  console.log('install');

  event.waitUntil(
    caches.open(CACHE)
    .then(cache => {
      console.log("Opened cache");
      return cache.addAll(URLS);
    })
    .catch(err => {
      console.log(err);
      throw err;
    })
);
});

sw.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
        return Promise.all(
            cacheNames
            .filter(name => {/* Нужно вернуть true, если хотите удалить этот файл из кеша совсем */})
      .map(name => caches.delete(name))
    )
  })
  )
});

sw.addEventListener('fetch', event => {
  event.respondWith(
      caches.match(event.request)
          .then(response => {
              if (response) {
                  return response;
              }
      const fetchRequest = event.request.clone();
      return fetch(fetchRequest)
      .then(response => {
          if(!response || response.status !== 200 || response.type !== 'basic' || !event.request.url.startsWith('http')) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE)
          .then(cache => {
              cache.put(event.request, responseToCache);
          });
          return response;
       }
      );
  })
);
});
