(async () => {
  if (navigator.connection.saveData === false) {
    const { default: confetti } = await import(
      "https://cdn.skypack.dev/canvas-confetti@latest"
    );
    confetti();
  }
})();
