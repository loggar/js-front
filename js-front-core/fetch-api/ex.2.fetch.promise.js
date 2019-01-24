fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    console.log("Booo");
  });

fetch(url)
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(e => console.log("Booo"));
