// XHR kinda smushes the request and response together, meaning they can't be used separately. Fetch is different thanks to the Request and Response constructors. This is particularly useful within a ServiceWorker:

self.addEventListener("fetch", function(event) {
  if (event.request.url === new URL("/", location).href) {
    event.respondWith(
      new Response("<h1>Hello!</h1>", {
        headers: { "Content-Type": "text/html" }
      })
    );
  }
});

/*
In the above, event.request is a Request. There's no response yet, and instead of letting the browser go to the network I respond with my own Response. Alternatively, I could get the response from the network using fetch(event.request), or even get a response from the cache.

The Cache API is a store of Responses keyed against Requests, having separates allows you to add your own pairings.

This is in Chrome stable today from within a ServiceWorker. The fetch API is also available from pages in Chrome Beta.

Soon, request.context will be able to tell you the source of that request, so you can tell apart requests triggered by hyperlinks vs <img> etc.
*/
