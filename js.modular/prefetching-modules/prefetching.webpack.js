/*
webpack enables you to prefetch scripts for routes or functionality you're reasonably certain users will visit or use soon.

The following code snippet lazy-loads a sorting functionality from the lodash library to sort a group of numbers that will be submitted by a form:
*/

// dynamic import
form.addEventListener("submit", (e) => {
  e.preventDefault();
  import("lodash.sortby")
    .then((module) => module.default)
    .then(sortInput())
    .catch((err) => {
      alert(err);
    });
});

// Prefetching JavaScript modules with webpack magic comments
form.addEventListener("submit", (e) => {
  e.preventDefault();
  import(/* webpackPrefetch: true */ "lodash.sortby")
    .then((module) => module.default)
    .then(sortInput())
    .catch((err) => {
      alert(err);
    });
});

// This tells webpack to inject the <link rel="prefetch"> tag into the HTML document:
/*
<link rel="prefetch" as="script" href="1.bundle.js">
*/
