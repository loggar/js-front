const url = "https://reqres.in/api/users";

// post body data
const user = {
  first_name: "John",
  last_name: "Doe",
  job_title: "Blogger"
};

// request options
const options = {
  method: "POST",
  body: JSON.stringify(user),
  headers: {
    "Content-Type": "application/json"
  }
};

// send POST request
fetch(url, options)
  .then(res => res.json())
  .then(res => console.log(res));
