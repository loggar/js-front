function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function saveInput() {
  console.log("Saving data");
}

const processChange = debounce(() => saveInput());

/*
<input type="text" onkeyup="processChange()" />

<button onclick="processChange()">Click me</button>

window.addEventListener("scroll", processChange);
*/
