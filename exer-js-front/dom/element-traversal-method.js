Element.prototype.next = function () {
	if (this.nextElementSibling) return this.nextElementSibling;
	var sib = this.nextSibling;
	while (sib && sib.nodeType !== 1) sib = sib.nextSibling;
	return sib;
};


// Simulate the Element.children property in non-IE browsers that don't have it
// Note that this returns a static array rather than a live NodeList
if (!document.documentElement.children) {
	Element.prototype.__defineGetter__("children", function () {
		var kids = [];
		for (var c = this.firstChild; c != null; c = c.nextSibling)
			if (c.nodeType === 1) kids.push(c);
		return kids;
	});
}