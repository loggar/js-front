// Use a DocumentFragment to store and then mass inject a list of DOM nodes
var frag = document.createDocumentFragment();
for (var x = 0; x < 10; x++) {
	var li = document.createElement("li");
	li.innerHTML = "List item " + x;
	frag.appendChild(li);
}

let firstChild = frag.firstChild;

let firstDiv = frag.querySelector('div');
let allDivs = frag.querySelectorAll('div');


/*
When you're ready to inject all of the created DOM nodes, you can simply execute:
*/

// "placementNode" will be the parent of the nodes within the DocumentFragment
placementNode.appendChild(frag);


/*
You can also inject nodes one at a time:
*/

placementNode.appendChild(frag.firstChild);