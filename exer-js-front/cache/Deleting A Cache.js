caches.delete('test-cache').then(function () {
	console.log('Cache successfully deleted!');
});




// Assuming `CACHE_NAME` is the newest name
// Time to clean up the old!
var CACHE_NAME = 'version-8';

// ...

caches.keys().then(function (cacheNames) {
	return Promise.all(
		cacheNames.map(function (cacheName) {
			if (cacheName != CACHE_NAME) {
				return caches.delete(cacheName);
			}
		})
	);
});