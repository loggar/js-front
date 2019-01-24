/*
If I request //google.com from this site using XHR or plain fetch it will fail. This is because it's a CORS request and the response doesn't have CORS headers.

However, with fetch, you can make a no-cors request:
*/

fetch("//google.com", {
  mode: "no-cors"
}).then(function(response) {
  console.log(response.type); // "opaque"
});

// This is similar to the request an <img> makes. Of course, you can't read the content of the response as it could contain private information, but it can be consumed by other APIs:

self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch("//www.google.co.uk/images/srpr/logo11w.png", {
      mode: "no-cors"
    })
  );
});

/*
The above is fine within a ServiceWorker, as long as the receiver is happy with a no-cors response. <img> is, <img crossorigin> isn't.

You can also store these responses in the Cache API for use later, which is great for CDN content such as scripts, CSS, and imagery, which often lack CORS headers.

For more on the origin of CORS, see [Anne VK's article on same-origin policy](https://annevankesteren.nl/2015/02/same-origin-policy).

This all works in Chrome stable today. In Chrome Canary, although you can use fetch() from a page, no-cors isn't enabled there yet
*/
