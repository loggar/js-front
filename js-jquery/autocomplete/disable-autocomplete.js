// bower install jquery.disableAutoFill

// <script src="src/jquery.disableAutoFill.min.js"></script>

$('form[autocomplete="off"] input, input[autocomplete="off"]').each(function() {
  var input = this;
  $(input).disableAutoFill();
});
