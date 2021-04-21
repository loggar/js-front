kendoGridBuilder.getHeader(
  "grid_element_id",
  "grid.header.file",
  {
    sortable: true,
    height: $(window).height() - 230,
    toolbar: ["excel"],
    excel: {
      fileName: "Excel File Name" + ".xlsx",
      allPages: true
    },
    pageable: true,
    dataBound: function(e) {
      var items = e.sender.items();
      items.each(function(idx, item) {
        var target = e.sender.dataItem(item);
        if (target.IS_EXPIRED == "Y") {
          $(item).addClass("disabled-row");
        }
      });
    }
  },
  function() {
    search();
  }
);
