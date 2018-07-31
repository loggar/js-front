/*
If you don't want to modify your HTML, there's a pretty handy imperative API for you to use. All you need to do is declare a function, do your thing, and return a value.

For instance, if you want to dynamically set a target, you'll need to return a Node.
*/

new ClipboardJS('.btn', {
	target: function (trigger) {
		return trigger.nextElementSibling;
	}
});

/*
If you want to dynamically set a text, you'll return a String.
*/

new ClipboardJS('.btn', {
	text: function (trigger) {
		return trigger.getAttribute('aria-label');
	}
});

/*
For use in Bootstrap Modals or with any other library that changes the focus you'll want to set the focused element as the container value.
*/

new ClipboardJS('.btn', {
	container: document.getElementById('modal')
});

/*
Also, if you are working with single page apps, you may want to manage the lifecycle of the DOM more precisely. Here's how you clean up the events and objects that we create.
*/

var clipboard = new ClipboardJS('.btn');
clipboard.destroy();