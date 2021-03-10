caches.open('test-cache').then(function (cache) {
	cache.addAll(['/', '/images/logo.png'])
		.then(function () {
			// Cached!
		});
});



caches.open('test-cache').then(function (cache) {
	cache.add('/page/1');  // "/page/1" URL will be fetched and cached!
});



caches.open('test-cache').then(function (cache) {
	cache.add(new Request('/page/1', { /* request options */ }));
});



fetch('/page/1').then(function (response) {
	return caches.open('test-cache').then(function (cache) {
		return cache.put('/page/1', response);
	});
});