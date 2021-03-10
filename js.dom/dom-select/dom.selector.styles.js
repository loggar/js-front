// Selecting the first element that matches with the query
var main = document.querySelector("main.container");
main.style.fontFamily = "Arial";
main.style.background = "#A03642";
main.style.color = "#fff";
main.style.padding = "1rem";

console.log(main);

// Selecting all elements that matches with the query
var list = document.querySelectorAll("ul[attr=value] li").forEach(el => {
  el.style.fontFamily = "Arial";
  el.style.background = "#016395";
  el.style.color = "#fff";
  el.style.padding = "1rem";
  el.style.transition = "opacity 0.5s linear 0s";
  el.style.opacity = 0.5;
});

console.log(list);
