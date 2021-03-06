const formToObject = form =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );

// Example
formToObject(document.querySelector("#form")); // { email: 'test@email.com', name: 'Test Name' }
