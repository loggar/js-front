function getLocation() {
  if (!navigator.geolocation) {
    console.log("Geolocation API not supported by this browser.");
  } else {
    console.log("Checking location...");
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function watchLocation() {
  navigator.geolocation.watchPosition(function success(position) {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  });
}
