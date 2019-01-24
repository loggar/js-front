$("p").off();

$("p").off("click", "**");

var foo = function() {
  // Code to handle some kind of event
};

// ... Now foo will be called when paragraphs are clicked ...
$("body").on("click", "p", foo);

// ... Foo will no longer be called.
$("body").off("click", "p", foo);

var validate = function() {
  // Code to validate form entries
};

// Delegate events under the ".validator" namespace
$("form").on("click.validator", "button", validate);

$("form").on("keypress.validator", "input[type='text']", validate);

// Remove event handlers in the ".validator" namespace
$("form").off(".validator");
