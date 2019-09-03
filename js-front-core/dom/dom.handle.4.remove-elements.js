const container = document.querySelector("#container");
container.remove(); // hasta la vista, baby

// Much better than the old way:
const container = document.querySelector("#container");
container.parentNode.removeChild(container);
