// How to check if the parent element contains the child element?

const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

// Examples
elementContains(
  document.querySelector("head"),
  document.querySelector("title")
);
// true
elementContains(document.querySelector("body"), document.querySelector("body")); // false
