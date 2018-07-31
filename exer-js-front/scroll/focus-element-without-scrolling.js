var focusWithoutScrolling = function (elem) {
	var x, y;
	// More sources for scroll x, y offset.
	if (typeof (window.pageXOffset) !== 'undefined') {
		x = window.pageXOffset;
		y = window.pageYOffset;
	} else if (typeof (window.scrollX) !== 'undefined') {
		x = window.scrollX;
		y = window.scrollY;
	} else if (document.documentElement && typeof (document.documentElement.scrollLeft) !== 'undefined') {
		x = document.documentElement.scrollLeft;
		y = document.documentElement.scrollTop;
	} else {
		x = document.body.scrollLeft;
		y = document.body.scrollTop;
	}

	elem.focus();

	if (typeof x !== 'undefined') {
		// In some cases IE9 does not seem to catch instant scrollTo request.
		setTimeout(function () { window.scrollTo(x, y); }, 100);
	}
}
