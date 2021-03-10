const url = "https://reqres.in/api/users";

// post body data
const user = {
  first_name: "John",
  last_name: "Doe",
  job_title: "Blogger"
};

// create request object
const request = new Request(url, {
  method: "POST",
  body: JSON.stringify(user),
  headers: new Headers({
    "Content-Type": "application/json"
  })
});

// pass request object to `fetch()`
fetch(request)
  .then(res => res.json())
  .then(res => console.log(res));
