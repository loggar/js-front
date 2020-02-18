let doc = new DOMParser().parseFromString('<div><b>Hello!</b></div>', 'text/html');


/*
Returned is a document containing the nodes generated from your string.
With said document you can use standard node traversal methods to retrieve the nodes we specified in our string:
*/

let doc = new DOMParser().parseFromString('<div><b>Hello!</b></div>', 'text/html');
let div = doc.body.firstChild;

let divs = doc.body.querySelectorAll('div');


/*
You don't need a single wrapping element like JSX components -- you can have sibling elements:
*/

let doc = new DOMParser().parseFromString('<div>1</div><div>2</div>', 'text/html');
let firstDiv = doc.body.firstChild;
let secondDiv = firstDiv.nextSibling;


/*
Here's a simple wrapping function for DOMParser to retrieve the nodes:
*/

let getNodes = str => new DOMParser().parseFromString(str, 'text/html').body.childNodes;

let nodes = getNodes('<div>1</div><div>2</div>');

// [div, div]