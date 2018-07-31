$.fn.focusWithoutScrolling = function () {
	var x = window.scrollX, y = window.scrollY;
	// var x = $(document).scrollLeft(), y = $(document).scrollTop(); // IE10
	this.focus();
	window.scrollTo(x, y);
};