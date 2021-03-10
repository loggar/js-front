var elem = document.querySelector("#some-elem");

// Get text content
var text = elem.textContent;

// Set text content
elem.textContent = "We can dynamically change the content.";

// Add text to the end of an element's existing content
elem.textContent += " Add this after what is already there.";

// Add text to the beginning of an element's existing content
elem.textContent = "We can add this to the beginning. " + elem.textContent;
