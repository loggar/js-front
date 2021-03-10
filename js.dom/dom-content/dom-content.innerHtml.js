var elem = document.querySelector("#some-elem");

// Get HTML content
var html = elem.innerHTML;

// Set HTML content
elem.innerHTML =
  'We can dynamically change the HTML. We can even include HTML elements like <a href="#">this link</a>.';
