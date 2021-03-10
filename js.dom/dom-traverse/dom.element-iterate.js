// HTMLCollection

const inputs = document.getElementById("signup").getElementsByTagName("input");
// iterate over HTMLCollection
Array.from(inputs).forEach(element => {
  console.log(element);
});

// NodeList

const inputs = document.querySelector("#signup").querySelectorAll("input");
//iterate over NodeList
inputs.forEach(element => {
  console.log(element);
});
