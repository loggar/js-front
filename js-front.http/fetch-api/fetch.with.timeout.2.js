async function fetchWithTimeout(resource, options) {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  return response;
}

// usage
async function loadGames() {
  const response = await fetchWithTimeout("/games", {
    timeout: 6000,
  });
  const games = await response.json();
  return games;
}

myButton.addEventListener("click", async function () {
  try {
    const games = await loadGames();
    console.log(games);
  } catch (error) {
    // Timeouts if the request takes
    // longer than 6 seconds
    console.log(error);
  }
});
