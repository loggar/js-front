parent.history.back();

parent == self; // For any top-level window

var iframeElement = document.getElementById("f1");

var childFrame = document.getElementById("f1").contentWindow;


var elt = document.getElementById("f1");
var win = elt.contentWindow;
win.frameElement === elt // Always true for frames
window.frameElement === null // For toplevel windows



var i = 3;

window.i


parent.A.i = 4; // Change the value of a variable in frame A

parent.B.f(); // Invoke a function defined in frame B

var f = parent.B.f;
