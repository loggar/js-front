$(grid.element).on("click", ".toolbar-cancel", function() {
  grid.clearSelection();
  grid.dataItems().forEach(function(dataItem) {
    dataItem.set("IsChecked", false);
  });
});
