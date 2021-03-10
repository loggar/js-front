class Fetcher {
  doFetch(resource, options) {
    return fetch(resource, options);
  }
}

async function fetchMoviesBadStatus() {
  const response = await fetcher.doFetch("/movies");
  const movies = await response.json();
  return movies;
}

class FetchDecoratorBadStatus {
  decoratee;

  constructor(decoratee) {
    this.decoratee = decoratee;
  }

  async doFetch(resource, options) {
    const response = await this.decoratee.doFetch(resource, options);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    return response;
  }
}

/*
const fetcher = new FetchDecoratorBadStatus(
  new Fetcher()
);
*/

/*
fetchMoviesBadStatus()
  .then((movies) => {
    // When fetch succeeds
    movies;
  })
  .catch((error) => {
    // When fetch ends with a bad HTTP status, e.g. 404
    error.message;
  });
*/

class FetchDecorator1 {}

class FetchDecorator2 {}

const fetcher = new FetchDecorator1(
  new FetchDecorator2(new FetchDecoratorBadStatus(new Fetcher()))
);

await fetcher.doFetch("/movies");
