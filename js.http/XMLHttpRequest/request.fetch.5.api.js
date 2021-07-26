const getUserData = async () => {
  const response = await fetch("api/user/resource", {
    method: "GET", //'POST', 'PUT', 'PATCH', 'DELETE'
  });

  const data = await response.json();

  return data;
};

const formData = { firstName: "Jane" };

const postUserData = async () => {
  const response = await fetch("api/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  return data;
};
