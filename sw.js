/// <reference no-default-lib="true"/>
/// <reference lib="webworker" />
var CACHE = 'tymburg-game-cache-v1';
var URLS = [
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
var sw = self;
sw.addEventListener("install", function (event) {
    console.log('install');
    event.waitUntil(caches.open(CACHE)
        .then(function (cache) {
        console.log("Opened cache");
        return cache.addAll(URLS);
    })["catch"](function (err) {
        console.log(err);
        throw err;
    }));
});
sw.addEventListener("activate", function (event) {
    event.waitUntil(caches.keys().then(function (cacheNames) {
        return Promise.all(cacheNames
            .filter(function (name) { })
            .map(function (name) { return caches["delete"](name); }));
    }));
});
sw.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request)
        .then(function (response) {
        if (response) {
            return response;
        }
        var fetchRequest = event.request.clone();
        return fetch(fetchRequest)
            .then(function (response) {
            if (!response || response.status !== 200 || response.type !== 'basic' || !event.request.url.startsWith('http')) {
                return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE)
                .then(function (cache) {
                cache.put(event.request, responseToCache);
            });
            return response;
        });
    }));
});
