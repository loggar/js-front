/*
Many of the functionalities that we're translated from mobile to the web require permission from the user.  Think about geolocation, audio/video access (think getUserMedia for camera access), and likewise APIs.  We can probably all agree that requiring permission for access to these APIs is a good thing, but I see a problem:  there's sometimes no way to access each APIs permission level without triggering a request to the user to get that information.  Obtrusive to say the least!

I recently discovered the Permissions API which provides a method to query the permission level for an API without trigger a request to the user for access.  Let's look at a simple example:
*/

// Get the geolocation status (starts out as "prompt")
// ... meaning the user will be shown an access request if we want it
navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
	/* result.status = "prompt" */
});

// Request geolocation access if we really want it
navigator.geolocation.getCurrentPosition(function (result) { /* ... */ })

// Assuming the user requested access, the permission is now "granted"
navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
	/* result.status = "granted" */
});

// Push notifications require options:
navigator.permissions.query({ name: 'push', userVisibleOnly: true }).then(function (result) { /* ... */ });