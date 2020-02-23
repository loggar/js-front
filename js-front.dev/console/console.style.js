console.log("%cThis is large red text", "color: red; font-size: 30px;");

console.log(
  "This is %cred text %cand this is %cgreen text.",
  "color: red;",
  "",
  "color: green;"
);

console.log(
  "%cHello there!",
  `
  background: white;
  border: 3px solid red;
  color: red;
  font-size: 50px;
  margin: 40px;
  padding: 20px;
`
);
