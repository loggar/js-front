var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.responseType = "json";

xhr.onload = function() {
  console.log(xhr.response);
};

xhr.onerror = function() {
  console.log("Booo");
};

xhr.send();
