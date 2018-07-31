/*
offsetWidth clientWidth scrollWidth
offsetHeight clientHeight scrollHeight
offsetLeft clientLeft scrollLeft
offsetTop clientTop scrollTop
offsetParent

*/


function getElementPosition(e) {
	var x = 0, y = 0;
	while (e != null) {
		x += e.offsetLeft;
		y += e.offsetTop;
		e = e.offsetParent;
	}
	return { x: x, y: y };
}



/*
When a document contains scrollable elements with overflowing content, the getEle
mentPosition() method defined above does not work correctly because it does not take
scrollbar position into account. Here is a modified version that subtracts scrollbar positions
from the accumulated offsets and, in so doing, converts the returned position
from document coordinates to viewport coordinates:
*/

function getElementPos(elt) {
	var x = 0, y = 0;
	// Loop to add up offsets
	for (var e = elt; e != null; e = e.offsetParent) {
		x += e.offsetLeft;
		y += e.offsetTop;
	}
	// Loop again, through all ancestor elements to subtract scroll offsets.
	// This subtracts the main scrollbars, too, and converts to viewport coords.
	for (var e = elt.parentNode; e != null && e.nodeType == 1; e = e.parentNode) {
		x -= e.scrollLeft;
		y -= e.scrollTop;
	}
	return { x: x, y: y };
}