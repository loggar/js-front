async function fetchMovies404() {
  const response = await fetch("/oops");

  response.ok; // => false
  response.status; // => 404

  const text = await response.text();
  return text;
}

fetchMovies404().then((text) => {
  text; // => 'Page not found'
});

async function fetchMoviesBadStatus() {
  const response = await fetch("/oops");

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const movies = await response.json();
  return movies;
}

fetchMoviesBadStatus().catch((error) => {
  error.message; // 'An error has occurred: 404'
});
