document.querySelectorAll("p"); // selects all <p> elements, returns NodeList object not Array.

const arr = [...document.querySelectorAll("p")];
// or
const arr = Array.from(document.querySelectorAll("p"));

// now arr is Array object, not NodeList.
arr.find(ele => {}); // .find() now works

// querySelectorAll returns a NodeList which is static.
// getElementsByTagName and getElementsByClassName return an HTMLCollection which is a live collection.

// HTMLCollection can only contain HTMLElements and a NodeList can contain any type of Node.

// You don’t necessarily need to run querySelector(All) on document. You can run it on any HTMLElement to run a relative search:
const div = document.querySelector("#container");
div.querySelectorAll("p"); // finds all <p> tags in #container only
