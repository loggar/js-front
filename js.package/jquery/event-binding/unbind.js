$("#foo").unbind();

$("#foo").unbind("click");

var handler = function() {
  alert("The quick brown fox jumps over the lazy dog.");
};
$("#foo").bind("click", handler);
$("#foo").unbind("click", handler);

$("#foo").bind("click", function() {
  alert("The quick brown fox jumps over the lazy dog.");
});

// Will NOT work
$("#foo").unbind("click", function() {
  alert("The quick brown fox jumps over the lazy dog.");
});
