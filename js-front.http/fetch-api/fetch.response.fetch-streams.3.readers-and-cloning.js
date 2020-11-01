/*
we initially shipped fetch without streams support so developers could get the other benefits sooner. To make up for a lack of streams & to subsequently offer a simple way to get common data types, we added some readers:
*/

fetch(url).then(function(response) {
  return response.json();
});

/*
That, as you might expect, reads the whole stream as JSON. Here's the full list of readers:

.arrayBuffer()
.blob()
.formData()
.json()
.text()
They exist on Request objects as well as responses, so you can use them to read (for example) POST data within a ServiceWorker.

These are true stream readers, meaning they drain the stream:
*/

fetch(url).then(function(response) {
  return response.json().catch(function() {
    // This does not work:
    return response.text();
  });
});

/*
The call to .text() fails as the stream has already been read. You can work around this using .clone():
*/

fetch(url).then(function(response) {
  return response
    .clone()
    .json()
    .catch(function() {
      return response.text();
    });
});

/*
.clone() opts you into buffering. The clone gets read as JSON, but the original is still there and can be read in another format. Of course, this means the raw response data needs to be kept around in memory until all copies are read or garbage collected.

Alternatively, you could look at the headers of the response:
*/

fetch(url).then(function(response) {
  if (response.headers.get("Content-Type") === "application/json") {
    return response.json();
  }
  return response.text();
});

// This is another feature fetch has over XHR, you can decide which format to read the body as after you've inspected the headers.
