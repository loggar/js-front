const xhr = new XMLHttpRequest();

// listen for `load` event
xhr.onload = () => {
  // print JSON response
  if (xhr.status >= 200 && xhr.status < 300) {
    // parse JSON
    const response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};

// create a JSON object
const json = {
  email: "abc.12@path.to.a.com",
  password: "secret"
};

// open request
xhr.open("POST", "https://path.to.a.com/api/login");

// set `Content-Type` header
xhr.setRequestHeader("Content-Type", "application/json");

// send rquest with JSON payload
xhr.send(JSON.stringify(json));
