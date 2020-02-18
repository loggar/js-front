fetch("http://10.2.10.113:28120/", {})
  .then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Unable to fetch sample");
    }
  })
  .then(data => {
    console.log(data.puzzle);
  })
  .catch(error => {
    console.log(error);
  });
