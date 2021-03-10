divNode.innerHTL = "<p>I'm Paragraph</p>" + divNode.innerHTML;

/*
<div id="divNode">
    <p>I'm Paragraph</p>
    <div id="childNode1">Chidl Node 1</div>
    <div id="childNode2">Child Node 2</div>
    <div id="childNode3">Child Node 3</div>
</div>
*/

divNode.innerText; // "I'm Paragraph\n\nChidl Node 1\nChild Node 2\nChild Node 3"
