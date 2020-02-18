function fetchStatus(address) {
  var client = new XMLHttpRequest();
  client.onreadystatechange = function() {
    // in case of network errors this might not give reliable results
    if (this.readyState == 4) {
      if (this.status == 200) {
        console.log("The url is available");
        // send an event
      } else {
        console.log("The url returned status code " + this.status);
        // send a different event
      }
    }
  };
  client.open("HEAD", address);
  client.send();
}

fetchStatus("http://10.2.10.113:28120/");
