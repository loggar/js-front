// when a item of datasource changed

function a() {
  var gridId = "grid_01";
  var grid = $("#" + gridId).data("kendoGrid");

  var rows = grid.select();
  rows.each(function(e) {
    this.val = "new value";
  });

  grid.refresh();
}
