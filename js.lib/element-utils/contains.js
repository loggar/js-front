const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);

// Examples
elementContains(
  document.querySelector("head"),
  document.querySelector("title")
);
// true
elementContains(document.querySelector("body"), document.querySelector("body")); // false
