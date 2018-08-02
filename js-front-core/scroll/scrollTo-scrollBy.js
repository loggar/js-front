// Get the height of the document and viewport. offsetHeight is explained below.
var documentHeight = document.documentElement.offsetHeight;
var viewportHeight = window.innerHeight; // Or use getViewportSize() above
// And scroll so the last "page" shows in the viewport
window.scrollTo(0, documentHeight - viewportHeight);




// Scroll 10 pixels down every 200 ms. Note there is no way to turn this off!
setInterval(function() {scrollBy(0,10)}, 200);