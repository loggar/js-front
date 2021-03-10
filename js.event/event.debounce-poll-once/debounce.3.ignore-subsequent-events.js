/*
That’s good for triggering auto-save or displaying suggestions. But what about the use case with multiple clicks of a single button? We don’t want to wait for the last click, but rather register the first one and ignore the rest
*/
function debounce_leading(func, timeout = 300) {
  let timer;
  return (...args) => {
    if (!timer) {
      func.apply(this, args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined;
    }, timeout);
  };
}

function saveInput() {
  console.log("Saving data");
}

const processChange = debounce(() => saveInput());
