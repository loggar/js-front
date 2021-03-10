(async () => {
  if (condition) {
    // await import("stuff.js");

    // Like confetti! Which you have to import this special way because the web
    const { default: confetti } = await import(
      "https://cdn.skypack.dev/canvas-confetti@latest"
    );
    confetti();
  }
})();
