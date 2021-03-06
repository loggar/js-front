// Emulate the XMLHttpRequest() constructor in IE5 and IE6
if (window.XMLHttpRequest === undefined) {
	window.XMLHttpRequest = function () {
		try {
			// Use the latest version of the ActiveX object if available
			return new ActiveXObject("Msxml2.XMLHTTP.6.0");
		}
		catch (e1) {
			try {
				// Otherwise fall back on an older version
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}
			catch (e2) {
				// Otherwise, throw an error
				throw new Error("XMLHttpRequest is not supported");
			}
		}
	};
}