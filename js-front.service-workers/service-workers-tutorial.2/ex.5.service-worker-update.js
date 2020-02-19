// ...
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(cache => {
          if (cache === CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
