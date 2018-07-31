/**
* Encode the properties of an object as if they were name/value pairs from
* an HTML form, using application/x-www-form-urlencoded format
*/
function encodeFormData(data) {
	if (!data) return ""; // Always return a string
	var pairs = []; // To hold name=value pairs
	for (var name in data) { // For each name
		if (!data.hasOwnProperty(name)) continue; // Skip inherited
		if (typeof data[name] === "function") continue; // Skip methods
		var value = data[name].toString(); // Value as string
		name = encodeURIComponent(name.replace(" ", "+")); // Encode name
		value = encodeURIComponent(value.replace(" ", "+")); // Encode value
		pairs.push(name + "=" + value); // Remember name=value pair
	}
	return pairs.join('&'); // Return joined pairs separated with &
}


function postData(url, data, callback) {
	var request = new XMLHttpRequest();
	request.open("POST", url); // POST to the specified url
	request.onreadystatechange = function () { // Simple event handler
		if (request.readyState === 4 && callback) // When response is complete
			callback(request); // call the callback.
	};
	request.setRequestHeader("Content-Type", // Set Content-Type
		"application/x-www-form-urlencoded");
	request.send(encodeFormData(data)); // Send form-encoded data
}


function getData(url, data, callback) {
	var request = new XMLHttpRequest();
	request.open("GET", url + // GET the specified url
		"?" + encodeFormData(data)); // with encoded data added
	request.onreadystatechange = function () { // Simple event handler
		if (request.readyState === 4 && callback) callback(request);
	};
	request.send(null); // Send the request
}