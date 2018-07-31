function cancelHandler(event) {
	var event = event || window.event; // For IE
	/* Do something to handle the event here */
	// Now cancel the default action associated with the event
	if (event.preventDefault) event.preventDefault(); // Standard technique
	if (event.returnValue) event.returnValue = false; // IE
	return false; // For handlers registered as object properties
}