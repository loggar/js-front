$("div#areaId input[type=checkbox]")
  .click(function(e) {
    e.preventDefault();
    return false;
  })
  .keyup(function(e) {
    e.preventDefault();
    return false;
  });
