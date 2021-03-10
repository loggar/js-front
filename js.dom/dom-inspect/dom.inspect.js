// <p class="foo">Hello world</p>
const p = document.querySelector("p");
p.matches("p"); // true
p.matches(".foo"); // true
p.matches(".bar"); // false, does not have class "bar"

// contains: check if an element is a child of another element
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
container.contains(h1); // true
container.contains(h2); // false

// compareDocumentPosition: more detailed information on elements
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
//  16 + 4 = 20. 20: h1 is contained by container and follows container
container.compareDocumentPosition(h1);
// 10: container contains h1 and precedes it
h1.compareDocumentPosition(container);
// 4: h2 follows h1
h1.compareDocumentPosition(h2);
// 2: h1 precedes h2
h2.compareDocumentPosition(h1);

// node.compareDocumentPostion(otherNode): int
/*
1: the nodes are not part of the same document
2: otherNode precedes node
4: otherNode follows node
8: otherNode contains node
16: otherNode is contained by node
*/

// MutationObserver: You can observe changes to any DOM node
const target = document.querySelector("#container");
const observer = new MutationObserver(callback);
observer.observe(target, options);
