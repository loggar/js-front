var b = document.getElementById("mybutton");
b.onclick = function () { console.log("Thanks for clicking me!"); };
b.addEventListener("click", function () { console.log("Thanks again!"); }, false);



document.removeEventListener("mousemove", handleMouseMove, true);
document.removeEventListener("mouseup", handleMouseUp, true);