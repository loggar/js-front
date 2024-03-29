const hide = (...el) => el.forEach((e) => (e.style.display = "none"));

// Example
hide(...document.querySelectorAll("img")); // Hides all <img> elements on the page
