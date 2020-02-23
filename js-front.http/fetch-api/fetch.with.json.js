// create a JSON object
const json = {
  email: "hi@attacomsian.com",
  password: "123abc"
};

// request options
const options = {
  method: "POST",
  body: JSON.stringify(json),
  headers: {
    "Content-Type": "application/json"
  }
};

// send post request
fetch("/login", options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
