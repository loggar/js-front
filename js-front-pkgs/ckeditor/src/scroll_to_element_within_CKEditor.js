var element = editor.document.getById('someHeading');
var range;

if (element) {
	element.scrollIntoView();
	range = editor.createRange();
	range.moveToPosition(element, CKEDITOR.POSITION_AFTER_START);
	editor.getSelection().selectRanges([range]);
}