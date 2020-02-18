function determineIfElementMatches(element, selector) {
	return element.matches(selector);
}

// Sample usage
var matches = determineIfElementMatches(myDiv, 'div.someSelector[some-attribute=true]');




/*
To work around all of the vendor mess, we can just use the Element prototype:
*/

function selectorMatches(el, selector) {
	var p = Element.prototype;
	var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
		return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	};
	return f.call(el, selector);
}

// Usage
matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]');