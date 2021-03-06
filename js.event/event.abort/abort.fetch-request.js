var controller = new AbortController();
var signal = controller.signal;

var downloadBtn = document.querySelector(".download");
var abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", function () {
  controller.abort();
  console.log("Download aborted");
});

function fetchVideo() {
  // ...
  fetch(url, { signal })
    .then(function (response) {})
    .catch(function (e) {
      // ...
      reports.textContent = "Download error: " + e.message;
    });
}
