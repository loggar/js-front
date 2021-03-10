caches.open('test-cache').then(function (cache) {
	cache.delete('/page/1');
});