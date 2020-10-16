async function fetchMoviesAndCategories() {
  const [moviesResponse, categoriesResponse] = await Promise.all([
    fetch("/movies"),
    fetch("/categories"),
  ]);

  const movies = await moviesResponse.json();
  const categories = await categoriesResponse.json();

  return {
    movies,
    categories,
  };
}

fetchMoviesAndCategories().then(({ movies, categories }) => {
  movies; // fetched movies
  categories; // fetched categories
});
