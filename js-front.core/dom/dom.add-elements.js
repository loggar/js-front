// <a href="/home" class="active">Home</a>

const link = document.createElement("a");
a.setAttribute("href", "/home");
a.className = "active";
a.textContent = "Home";
document.body.appendChild(link);

// jquery
$("body").append('<a href="/home" class="active">Home</a>');

// native equivalent:
document.body.insertAdjacentHTML("beforeend", '<a href="/home" class="active">Home</a>');

// insertAdjacentHTML
/*
'beforebegin': before the element
'afterbegin': inside the element before its first child
'beforeend': inside the element after its last child
'afterend': after the element
*/

// without insertAdjacentHTML:
const link = document.createElement("a");
const p = document.querySelector("p");
p.parentNode.insertBefore(link, p);

// with insertAdjacentHTML:
const p = document.querySelector("p");
p.insertAdjacentHTML("beforebegin", "<a></a>");
// or
const p = document.querySelector("p");
p.insertAdjacentHTML("beforebegin", document.createElement("a"));
