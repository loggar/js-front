const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");

for (const heading of headings) {
  heading.innerHTML = heading.innerHTML.replace(
    /\bLOGO\b/g,
    'L<span class="special-o">O</span>GO'
  );
}
