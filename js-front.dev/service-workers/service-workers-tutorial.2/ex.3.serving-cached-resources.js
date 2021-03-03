const CACHE_NAME = "site-name-cache";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache =>
        cache.addAll([
          "favicon.ico",
          "projects.json",
          "style.css",
          "index.js",
          "https://fonts.googleapis.com/css?family=Open+Sans:400,700"
        ])
      )
  );
});
