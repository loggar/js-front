document.body.addEventListener(
  "click",
  () => {
    console.log("Run only once");
  },
  { once: true }
);
