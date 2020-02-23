const xhr = new XMLHttpRequest();

// listen for `load` event
xhr.onload = () => {
  console.log(`The transfer is completed: ${xhr.status} ${xhr.response}`);
};

// listen for `error` event
xhr.onerror = () => {
  console.error("Download failed.");
};

// listen for `abort` event
xhr.onabort = () => {
  console.error("Download cancelled.");
};

// listen for `progress` event
xhr.onprogress = event => {
  // event.loaded returns how many bytes are downloaded
  // event.total returns the total number of bytes
  // event.total is only available if server sends `Content-Length` header
  console.log(`Downloaded ${event.loaded} of ${event.total} bytes`);
};

// open and send request
xhr.open("GET", "/download-attachment");
xhr.send();
