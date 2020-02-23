const xhr = new XMLHttpRequest();

// listen for `upload.load` event
xhr.upload.onload = () => {
  console.log(`The upload is completed: ${xhr.status} ${xhr.response}`);
};

// listen for `upload.error` event
xhr.upload.onerror = () => {
  console.error("Upload failed.");
};

// listen for `upload.abort` event
xhr.upload.onabort = () => {
  console.error("Upload cancelled.");
};

// listen for `progress` event
xhr.upload.onprogress = event => {
  // event.loaded returns how many bytes are downloaded
  // event.total returns the total number of bytes
  // event.total is only available if server sends `Content-Length` header
  console.log(`Uploaded ${event.loaded} of ${event.total} bytes`);
};

// open request
xhr.open("POST", "/upload-file");

// prepare a file object
const files = document.querySelector("[name=file]").files;
const formData = new FormData();
formData.append("avatar", files[0]);

// send request
xhr.send(formData);
