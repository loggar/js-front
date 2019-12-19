require('isomorphic-fetch');

const FETCH_TIMEOUT = 5000;
let didTimeOut = false;

new Promise(function (resolve, reject) {
	const timeout = setTimeout(function () {
		didTimeOut = true;
		reject(new Error('Request timed out'));
	}, FETCH_TIMEOUT);

	fetch('https://github.com/loggar')
		.then(function (response) {
			// Clear the timeout as cleanup
			clearTimeout(timeout);
			if (!didTimeOut) {
				console.log('fetch good! ', response);
				resolve(response);
			}
		})
		.catch(function (err) {
			console.log('fetch failed! ', err);

			// Rejection already happened with setTimeout
			if (didTimeOut) return;
			// Reject with error
			reject(err);
		});
})
	.then(function () {
		// Request success and no timeout
		console.log('good promise, no timeout! ');
	})
	.catch(function (err) {
		// Error: response error, request timeout or runtime error
		console.log('promise error! ', err);
	});

/*
Wrapping this code in a function called fetchWithTimeout, whereby you pass in a timeout and fetch URL/settings would work well; since people like to use fetch in a variety of ways, I've chosen not to create a generalized function and instead am just providing the basic logic.

Many would argue that the timeout should come from the server but we all know us front-end devs don't always have control over both sides of a request.  If you're looking for a fetch request timeout snippet, here you go!
*/