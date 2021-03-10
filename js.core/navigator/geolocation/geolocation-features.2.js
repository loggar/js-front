navigator.geolocation.getCurrentPosition(displayPosition);

function displayPosition(position) {
  console.log("Latitude:" + position.coords.latitude);

  console.log("Longitude:" + position.coords.longitude);
}

//Latitude: 40.1294478
//Longitude: 41.34804699999998
