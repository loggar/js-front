fetch(url)
  .then(res => res.json())
  .then(data => {
    // code to handle the response
  })
  .catch(err => {
    console.error("Error: ", err);
  });
