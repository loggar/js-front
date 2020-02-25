// open an empty window
const tab = window.open("about:blank");

// make an API call
fetch("https://efg.h/api/users")
  .then(res => res.json())
  .then(json => {
    // TODO: do something with JSON response

    // update the actual URL
    tab.location = "https://abc.d";
    tab.focus();
  })
  .catch(err => {
    // close the empty window
    tab.close();
  });
