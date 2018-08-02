var b = document.getElementById("mybutton");
var handler = function () { console.log("Thanks!"); };
if (b.addEventListener)
	b.addEventListener("click", handler, false);
else if (b.attachEvent)
	b.attachEvent("onclick", handler);