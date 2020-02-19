function getSelectedText() {
	if (window.getSelection) // The HTML5 standard API
		return window.getSelection().toString();
	else if (document.selection) // This is the IE-specific technique.
		return document.selection.createRange().text;
}