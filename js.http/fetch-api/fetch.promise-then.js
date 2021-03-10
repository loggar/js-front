fetch("http://sample.request.url", {})
  .then(response => {
    if (response.ok) {
      return response.json();
      /*  
      Actually, the .json() method takes the response and returns a Promise Object and hence  
      We need to add another then() as we have done in Promise Chaining   
    */
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
