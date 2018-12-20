function addCSSRule(sheet, selector, rules, index) {
	if(sheet.insertRule) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else {
		sheet.addRule(selector, rules, index);
	}
}

// Use it!
addCSSRule(document.styleSheets[0], "header", "float: left");