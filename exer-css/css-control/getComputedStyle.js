// Get the color value of .element:before
var color = window.getComputedStyle(
	document.querySelector('.element'), ':before'
).getPropertyValue('color');

// Get the content value of .element:before
var content = window.getComputedStyle(
	document.querySelector('.element'), ':before'
).getPropertyValue('content');