// Issue a synchronous HTTP GET request for the contents of the specified URL.
// Return the response text or throw an error if the request was not successful
// or if the response was not text.
function getTextSync(url) {
	var request = new XMLHttpRequest(); // Create new request
	request.open("GET", url, false); // Pass false for synchronous
	request.send(null); // Send the request now
	// Throw an error if the request was not 200 OK
	if (request.status !== 200) throw new Error(request.statusText);
	// Throw an error if the type was wrong
	var type = request.getResponseHeader("Content-Type");
	if (!type.match(/^text/))
		throw new Error("Expected textual response; got: " + type);
	return request.responseText;
}