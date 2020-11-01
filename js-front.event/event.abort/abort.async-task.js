let acontroller = new AbortController();
let signal = acontroller.signal;

function generateReport(signal) {
  return new Promise((resolve, reject) => {
    const error = new DOMException("aborted!", "AbortError"); //[3]
    if (signal.aborted) {
      return reject(error); //[2]
    }
    const timeout = setTimeout(() => {
      resolve("you report!");
    }, 20000);
    signal.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(error);
    });
  });
}

generateReport(signal)
  .then((report) => {
    console.log(report);
  })
  .catch((e) => console.log(e));

acontroller.abort(); //[1]
//aborted!
