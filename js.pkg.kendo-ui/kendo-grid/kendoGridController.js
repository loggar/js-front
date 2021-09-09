/**
 * @Module Grid Control (kendo)
 *
 */
var myGridCtrl = (function () {
  var gridUpdateMode = []; // { gridId: string, updateMode: string
  // ("I"|"U") : (insert|update) }
  var emptyDataSource = new kendo.data.DataSource({
    data: null,
    total: 0,
  });
  var selectRow = function (grid, index) {
    var nIndex = -1;
    if (typeof index === "number") {
      nIndex = index;
    } else {
      try {
        nIndex = parseInt(index);
      } catch (err) {
        myLogger.warn("FAIL selectRow : fail to select grid row");
        return false;
      }
    }
    if (typeof grid == "string")
      $("#" + grid)
        .data("kendoGrid")
        .select("tr:eq(" + nIndex + ")");
    else grid.select("tr:eq(" + nIndex + ")");
  };
  var selectFirstRow = function (grid) {
    grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
    if (grid._data.length > 0) {
      grid.select("tr:eq(0)");
    }
  };
  var selectFirstMatch = function (grid, k, v) {
    grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
    var dataSource = grid.dataSource;
    var filters = dataSource.filter() || {};
    var sort = dataSource.sort() || {};
    var models = dataSource.data();
    // We are using a Query object to get a sorted and filtered
    // representation of the data, without paging applied, so we can search
    // for the row on all pages
    var query = new kendo.data.Query(models);
    var rowNum = 0;
    var modelToSelect = null;
    models = query.filter(filters).sort(sort).data;
    // Now that we have an accurate representation of data, let's get the
    // item position
    if ($.isArray(k)) {
      for (var i = 0; i < models.length; ++i) {
        var model = models[i];
        var matchAllKeyValue = k.every(function (item) {
          return model[item.k] == item.v;
        });
        if (matchAllKeyValue) {
          modelToSelect = model;
          rowNum = i;
          break;
        }
      }
    } else {
      var keyId = k;
      var value = v;
      for (var i = 0; i < models.length; ++i) {
        var model = models[i];
        if (model[keyId] == value) {
          modelToSelect = model;
          rowNum = i;
          break;
        }
      }
    }
    // If you have persistSelection = true and want to clear all existing
    // selections first, grid._selectedIds = {}
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
  var scrollToSelected = function (grid, k, v) {
    grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
    if (grid.select().position()) {
      var scrollContentOffset = grid.element.find("tbody").offset().top;
      var selectContentOffset = grid.select().offset().top;
      grid.element.find(".k-grid-content").animate(
        {
          scrollTop: selectContentOffset - scrollContentOffset,
        },
        400
      );
    }
  };
  var clearSelection = function (grid) {
    grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
    grid._selectedIds = {};
    grid.clearSelection();
    grid.content.scrollTop(0);
  };
  var setUpdateMode = function (gridId, m) {
    for (var i = 0; i < gridUpdateMode.length; i++)
      if (gridUpdateMode[i].gridId == gridId) gridUpdateMode[i].updateMode = m;
    gridUpdateMode.push({
      gridId: gridId,
      updateMode: m,
    });
  };
  var getUpdateMode = function (gridId) {
    for (var i = 0; i < gridUpdateMode.length; i++)
      if (gridUpdateMode[i].gridId == gridId)
        return gridUpdateMode[i].updateMode;
    return "";
  };
  var hasValue = function (grid, k, v) {
    grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
    if (!grid) throw Error("invalid grid object.");
    var arrModel = grid.dataSource.data();
    for (var i = 0; i < arrModel.length; i++) {
      if (arrModel[i][k] == v) return i;
    }
    return -1;
  };
  var getItem = function (grid, k, v) {
    grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
    if (!grid) throw Error("invalid grid object.");
    var arrModel = grid.dataSource.data();
    for (var i = 0; i < arrModel.length; i++) {
      if (arrModel[i][k] == v) return arrModel[i];
    }
    return null;
  };
  var selectedRows = function (gridId) {
    var grid = $("#" + gridId).data("kendoGrid");
    var rows = grid.select();
    var items = [];
    rows.each(function (e) {
      items.push(grid.dataItem(this));
    });
    return items;
  };
  var selectedRow = function (gridId) {
    var items = selectedRows(gridId);
    if (items && items.length > 0) {
      return items[0];
    } else {
      return null;
    }
  };
  var selectedRowsIndexs = function (gridId) {
    var currentSelection = $("#" + gridId)
      .data("kendoGrid")
      .select();
    var selectedRows = [];
    currentSelection.each(function () {
      var currentRowIndex = $(this).closest("tr").index();
      if (selectedRows.indexOf(currentRowIndex) == -1) {
        selectedRows.push(currentRowIndex);
      }
    });
    return selectedRows;
  };
  var selectedRowIndex = function (gridId) {
    var arrRowIndex = selectedRowsIndexs(gridId);
    if (arrRowIndex.length > 0) {
      return arrRowIndex[0];
    } else {
      return -1;
    }
  };
  var clear = function (gridId) {
    var grid = $("#" + gridId).data("kendoGrid");
    if (!!grid) {
      grid.setDataSource(emptyDataSource);
      grid.dataSource.fetch(function (e) {});
    }
  };
  var kendoGridToCSV = function (grid) {
    // Get access to basic grid data
    var datasource = grid.dataSource;
    var originalPageSize = datasource.pageSize();
    var originalPage = datasource.page();
    var csv = "";
    // Add the header row
    for (var i = 0; i < grid.columns.length; i++) {
      var title = grid.columns[i].title,
        field = grid.columns[i].field;
      if (typeof field === "undefined") {
        continue; /* no data! */
      }
      if (typeof title === "undefined") {
        title = field;
      }
      title = title.replace(/"/g, '""');
      csv += '"' + title + '"';
      if (i < grid.columns.length - 1) {
        csv += ",";
      }
    }
    csv += "\n";
    // Add each row of data
    $.each(datasource._data, function (index, row) {
      // Do a first pass to parse any dates (may eventually need to parse
      // other types of received values here)
      for (var i = 0; i < grid.columns.length; i++) {
        var fieldName = grid.columns[i].field;
        if (typeof fieldName === "undefined") {
          continue;
        }
        if (
          typeof row[fieldName] == "string" &&
          row[fieldName].lastIndexOf("/Date(", 0) === 0
        ) {
          row[fieldName] = kendo.parseDate(row[fieldName]);
        }
      }
      // Now generate the actual values
      for (var i = 0; i < grid.columns.length; i++) {
        var fieldName = grid.columns[i].field;
        if (typeof fieldName === "undefined") {
          continue;
        }
        // Get the template and use it to get the display value
        var tmpl = grid._cellTmpl(grid.columns[i], {});
        var kt = kendo.template(tmpl);
        value = kt(row);
        // Strip any HTML (needs to be inclosed in an outer tag to work)
        // Also strip any elements with the 'no-export' class
        // Also remove any label elements since they get used often in
        // links
        var html = $("<div>" + value + "</div>");
        html.find(".label").remove();
        html.find(".no-export").remove();
        value = html.text().trim();
        // Format for CSV (escape quotes and add the comma)
        value = value.replace(/"/g, '""');
        csv += '"' + value + '"';
        if (i < grid.columns.length - 1) {
          csv += ",";
        }
      }
      csv += "\n";
    });
    // Send the CSV content back to the server to generate a download link
    var csvData = new Blob([csv], {
      type: "text/csv",
    });
    var fileName = grid.options.excel.fileName + ".csv";
    if (window.navigator.msSaveBlob) {
      // ie
      navigator.msSaveBlob(csvData, fileName);
    } else {
      // other browsers
      var link = document.createElement("a");
      var csvUrl = URL.createObjectURL(csvData);
      link.href = csvUrl;
      link.style = "visibility:hidden";
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // Reset back to original values and reset the datasource
    datasource.pageSize(originalPageSize);
    datasource.page(originalPage);
    datasource.view();
  };
  var saveAsExcel = function ($obj) {
    $obj.data("kendoGrid").saveAsExcel();
  };
  var saveAsExcelBlob = function ($obj) {
    kendo.ui.progress($obj, true);
    kendoGridToCSV($obj.data("kendoGrid"));
    kendo.ui.progress($obj, false);
  };
  var excelFileName = function ($obj, fileName) {
    if (!fileName) {
      return $obj.data("kendoGrid").options.excel.fileName;
    } else {
      $obj.data("kendoGrid").options.excel.fileName = fileName;
      $obj.data("kendoGrid").options.excel.allPages = true;
    }
  };
  var selectRowWhenRightClick = function (gridId) {
    var grid = $("#" + gridId).data("kendoGrid");
    $(grid.tbody).on("mousedown", "td", function (e) {
      var keycode = e.keyCode ? e.keyCode : e.which;
      if (keycode === 3) {
        var row = $(this).closest("tr");
        var rowIdx = $("tr", grid.tbody).index(row);
        // var colIdx = $("td", row).index(this);
        selectRow(gridId, rowIdx);
      }
    });
  };
  var data = function (grid) {
    grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
    if (!grid) throw Error("invalid grid object.");
    var d = grid.dataSource.data();
    return d ? d : [];
  };
  var refresh = function (grid) {
    grid = typeof grid == "string" ? $("#" + grid).data("kendoGrid") : grid;
    if (!grid) throw Error("invalid grid object.");
    grid.refresh();
  };
  return {
    selectRow: selectRow,
    selectFirstRow: selectFirstRow,
    selectFirstMatch: selectFirstMatch,
    clearSelection: clearSelection,
    setUpdateMode: setUpdateMode,
    getUpdateMode: getUpdateMode,
    hasValue: hasValue,
    getItem: getItem,
    selectedRows: selectedRows,
    selectedRow: selectedRow,
    selectedRowsIndexs: selectedRowsIndexs,
    selectedRowIndex: selectedRowIndex,
    clear: clear,
    saveAsExcel: saveAsExcel,
    saveAsExcelBlob: saveAsExcelBlob,
    excelFileName: excelFileName,
    selectRowWhenRightClick: selectRowWhenRightClick,
    data: data,
    refresh: refresh,
    updateTitle: function (gridId, fieldId, title) {
      $("#" + gridId + " thead [data-field=" + fieldId + "] .k-link").html(
        title
      );
    },
  };
})();
