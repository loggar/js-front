$("div[id^='abc']").on('mousedown', function(e) {
  e.preventDefault();
  return false;
});
