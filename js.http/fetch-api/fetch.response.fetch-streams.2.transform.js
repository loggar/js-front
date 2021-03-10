/*
Transform streams are coming soon, which would make the code above simpler. Ideally TextDecoder would be a transform stream, and another transform stream could chunk it into CSV rows. Something like:
*/

fetch("/big-data.csv").then(function(response) {
  var csvStream = response.body
    .pipeThrough(new TextDecoder())
    .pipeThrough(new CSVDecoder());

  csvStream.read().then(function(result) {
    // array of cell values for the first row
    console.log(result.value);
  });
});

// Transform streams also become really exciting within a ServiceWorker:

self.addEventListener("fetch", function(event) {
  event.respondWith(
    fetch("video.unknowncodec").then(function(response) {
      var h264Stream = response.body
        .pipeThrough(codecDecoder)
        .pipeThrough(h264Encoder);

      return new Response(h264Stream, {
        headers: { "Content-type": "video/h264" }
      });
    })
  );
});

/*
In the above, I'm using transform streams to take a video the browser doesn't understand, decode it with JS, and encode it in a format the browser does understand. It'd be amazing to see if the browser could do this in real time.
*/
