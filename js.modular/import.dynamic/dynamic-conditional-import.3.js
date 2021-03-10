// Top-level await will be enabled by default in Chrome (Chromium) 89. That means the code example doesn’t need the async wrapper function:

import "whatever";

if (condition) {
  const { default: confetti } = await import(
    "https://cdn.skypack.dev/canvas-confetti@latest"
  );

  confetti();
}

export const whatever = "whatever";
