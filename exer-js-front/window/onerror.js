// Display error messages in a dialog box, but never more than 3
window.onerror = function (msg, url, line) {
	if (onerror.num++ < onerror.max) {
		console.error("ERROR: " + msg + "\n" + url + ":" + line);
		return true;
	}
}
onerror.max = 3;
onerror.num = 0;