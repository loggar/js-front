window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    // register service worker
    navigator.serviceWorker.register("/sw-worker.js").then(
      () => {
        console.log("SW registration succesful");
      },
      err => {
        console.error("SW registration failed", err);
      }
    );
  } else {
    // Not supported
  }
});
