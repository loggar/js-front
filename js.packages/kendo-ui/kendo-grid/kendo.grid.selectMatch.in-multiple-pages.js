var selectFirstMatch = function(grid, k, v) {
  grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
  var dataSource = grid.dataSource;
  var filters = dataSource.filter() || {};
  var sort = dataSource.sort() || {};
  var models = dataSource.data();
  // We are using a Query object to get a sorted and filtered representation of the data, without paging applied, so we can search for the row on all pages
  var query = new kendo.data.Query(models);
  var rowNum = 0;
  var modelToSelect = null;
  models = query.filter(filters).sort(sort).data;
  // Now that we have an accurate representation of data, let's get the item position
  for (var i = 0; i < models.length; ++i) {
    var model = models[i];
    if (model[k] == v) {
      modelToSelect = model;
      rowNum = i;
      break;
    }
  }
  // If you have persistSelection = true and want to clear all existing selections first, grid._selectedIds = {}
  grid._selectedIds = {};
  // Now go to the page holding the record and select the row
  var currentPageSize = grid.dataSource.pageSize();
  var baseIndex = rowNum / currentPageSize;
  var pageWithRow = parseInt(baseIndex) + 1; // pages are one-based
  grid.dataSource.page(pageWithRow);
  if (modelToSelect && modelToSelect.uid) {
    var row = grid.element.find("tr[data-uid='" + modelToSelect.uid + "']");
    if (row.length > 0) {
      grid.select(row);
      // Scroll to the item to ensure it is visible
      grid.content.scrollTop(grid.select().position().top);
    } else {
      grid.clearSelection();
      grid.content.scrollTop(0);
    }
  } else {
    grid.clearSelection();
    grid.content.scrollTop(0);
  }
};
