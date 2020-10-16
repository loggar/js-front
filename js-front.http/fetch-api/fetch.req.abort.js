async function fetchMoviesWithCancel(controller) {
  const response = await fetch("/movies", {
    signal: controller.signal,
  });
  const movies = await response.json();
  return movies;
}

const controller = new AbortController();

cancelButton.addEventListener("click", () => {
  controller.abort();
});

fetchMoviesWithCancel(controller).catch((error) => {
  error.name; // => 'AbortError'
});
