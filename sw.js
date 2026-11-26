/* Service worker: keeps a copy of the notes on this device so the site still opens offline.
   It always tries the network first, so anyone online gets the newest notes automatically,
   and only falls back to the saved copy when there is no connection. */
var CACHE = 'bm-notes-v1';
var SHELL = ['./', 'favicon.svg', 'manifest.webmanifest', 'assets/img/icon-192.png', 'assets/img/icon-512.png', 'about.html'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return Promise.all(SHELL.map(function (u) { return c.add(new Request(u, { cache: 'no-cache' })).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  var local = url.origin === self.location.origin;
  var fonts = /^fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!local && !fonts) return;
  e.respondWith(fetch(req).then(function (r) {
    if (r && (r.ok || r.type === 'opaque')) {
      var copy = r.clone();
      caches.open(CACHE).then(function (c) { c.put(req, copy); });
    }
    return r;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: local }).then(function (hit) {
      return hit || (req.mode === 'navigate' ? caches.match('./') : Response.error());
    });
  }));
});
