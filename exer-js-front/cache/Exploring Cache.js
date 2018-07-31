caches.open('test-cache').then(function (cache) {
	cache.keys().then(function (cachedRequests) {
		console.log(cachedRequests); // [Request, Request]
	});
});

/*
Request {
  bodyUsed: false
  credentials: "omit"
  headers: Headers
  integrity: ""
  method: "GET"
  mode: "no-cors"
  redirect: "follow"
  referrer: ""
  url: "https://fullhost.tld/images/logo.png"
}
*/



caches.open('test-cache').then(function (cache) {
	cache.match('/page/1').then(function (matchedResponse) {
		console.log(matchedResponse);
	});
});

  /*
  Response {
	body: (...),
	bodyUsed: false,
	headers: Headers,
	ok: true,
	status: 200,
	statusText: "OK",
	type: "basic",
	url: "..."
  }
  */