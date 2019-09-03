let xhr = new XMLHttpRequest();
xhr.open("GET", "google.com");
xhr.responseType = "text";
xhr.onload = function() {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};
xhr.send();