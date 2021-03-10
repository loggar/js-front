var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(typeof xhttp.responseText, xhttp.responseText);
  }
};
xhttp.open("GET", "the-url", true);
xhttp.send();
