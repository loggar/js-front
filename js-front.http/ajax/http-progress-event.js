
/* the code checking onprogress event in AJAX request. */
if ("onprogress" in (new XMLHttpRequest())) {
	console.log("Progress events are supported");
	// Progress events are supported
}

/* example binding onprogress */
request.onprogress = function (e) {
	if (e.lengthComputable)
		progress.innerHTML = Math.round(100 * e.loaded / e.total) + "% Complete";
}