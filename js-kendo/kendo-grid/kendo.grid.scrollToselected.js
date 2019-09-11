var scrollToSelected = function(grid, k, v) {
  grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
  if (grid.select().position()) {
    var scrollContentOffset = grid.element.find("tbody").offset().top;
    var selectContentOffset = grid.select().offset().top;
    grid.element.find(".k-grid-content").animate(
      {
        scrollTop: selectContentOffset - scrollContentOffset
      },
      400
    );
  }
};
