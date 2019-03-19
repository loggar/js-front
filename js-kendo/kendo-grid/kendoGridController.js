/**
 * @Module Grid Control (kendo)
 *
 */
var myGridCtrl = (function() {
  var gridUpdateMode = []; // { gridId: string, updateMode: string ("I"|"U") : (insert|update) }
  var emptyDataSource = new kendo.data.DataSource({
    data: null,
    total: 0
  });
  var selectRow = function(grid, index) {
    var nIndex = -1;
    if (typeof index === 'number') {
      nIndex = index;
    } else {
      try {
        nIndex = parseInt(index);
      } catch (err) {
        myLogger.warn('FAIL selectRow : fail to select grid row');
        return false;
      }
    }
    if (typeof grid == 'string')
      $('#' + grid)
        .data('kendoGrid')
        .select('tr:eq(' + nIndex + ')');
    else grid.select('tr:eq(' + nIndex + ')');
  };
  var selectFirstRow = function(grid) {
    grid = typeof grid == 'string' ? $('#' + grid).data('kendoGrid') : grid;
    if (grid._data.length > 0) {
      grid.select('tr:eq(0)');
    }
  };
  var selectFirstMatch = function(grid, k, v) {
    grid = typeof grid == 'string' ? $('#' + grid).data('kendoGrid') : grid;
    grid.items().each(function() {
      var data = grid.dataItem(this);
      if (data[k] == v) {
        grid.select(this);
      }
    });
    if (!grid.select()) {
      koiLogger.warn('FAIL selectFirstMatch : fail to select grid row');
    } else {
      if (grid.select() && grid.select().position()) {
        /* force to scroll, grid config need to set scrollable(true) */
        var scrollContentOffset = grid.element.find('tbody').offset().top;
        var selectContentOffset = grid.select().offset().top;
        grid.element.find('.k-grid-content').animate(
          {
            scrollTop: selectContentOffset - scrollContentOffset
          },
          400
        );
      }
    }
  };
  var setUpdateMode = function(gridId, m) {
    for (var i = 0; i < gridUpdateMode.length; i++)
      if (gridUpdateMode[i].gridId == gridId) gridUpdateMode[i].updateMode = m;
    gridUpdateMode.push({
      gridId: gridId,
      updateMode: m
    });
  };
  var getUpdateMode = function(gridId) {
    for (var i = 0; i < gridUpdateMode.length; i++)
      if (gridUpdateMode[i].gridId == gridId)
        return gridUpdateMode[i].updateMode;
    return '';
  };
  var hasValue = function(grid, k, v) {
    grid = typeof grid == 'string' ? $('#' + grid).data('kendoGrid') : grid;
    if (!grid) throw Error('invalid grid object.');
    var arrModel = grid.dataSource.data();
    for (var i = 0; i < arrModel.length; i++) {
      if (arrModel[i][k] == v) return i;
    }
    return -1;
  };
  var selectedRows = function(gridId) {
    var grid = $('#' + gridId).data('kendoGrid');
    var rows = grid.select();
    var items = [];
    rows.each(function(e) {
      items.push(grid.dataItem(this));
    });
    return items;
  };
  var selectedRow = function(gridId) {
    var items = selectedRows(gridId);
    if (items && items.length > 0) {
      return items[0];
    } else {
      return null;
    }
  };
  var selectedRowsIndexs = function(gridId) {
    var currentSelection = $('#' + gridId)
      .data('kendoGrid')
      .select();
    var selectedRows = [];
    currentSelection.each(function() {
      var currentRowIndex = $(this)
        .closest('tr')
        .index();
      if (selectedRows.indexOf(currentRowIndex) == -1) {
        selectedRows.push(currentRowIndex);
      }
    });
    return selectedRows;
  };
  var selectedRowIndex = function(gridId) {
    var arrRowIndex = selectedRowsIndexs(gridId);
    if (arrRowIndex.length > 0) {
      return arrRowIndex[0];
    } else {
      return -1;
    }
  };
  var clear = function(gridId) {
    var grid = $('#' + gridId).data('kendoGrid');
    if (!!grid) {
      grid.setDataSource(emptyDataSource);
      grid.dataSource.fetch(function(e) {});
    }
  };
  var kendoGridToCSV = function(grid) {
    // Get access to basic grid data
    var datasource = grid.dataSource;
    var originalPageSize = datasource.pageSize();
    var originalPage = datasource.page();
    var csv = '';
    // Add the header row
    for (var i = 0; i < grid.columns.length; i++) {
      var title = grid.columns[i].title,
        field = grid.columns[i].field;
      if (typeof field === 'undefined') {
        continue; /* no data! */
      }
      if (typeof title === 'undefined') {
        title = field;
      }
      title = title.replace(/"/g, '""');
      csv += '"' + title + '"';
      if (i < grid.columns.length - 1) {
        csv += ',';
      }
    }
    csv += '\n';
    // Add each row of data
    $.each(datasource._data, function(index, row) {
      // Do a first pass to parse any dates (may eventually need to parse other types of received values here)
      for (var i = 0; i < grid.columns.length; i++) {
        var fieldName = grid.columns[i].field;
        if (typeof fieldName === 'undefined') {
          continue;
        }
        if (
          typeof row[fieldName] == 'string' &&
          row[fieldName].lastIndexOf('/Date(', 0) === 0
        ) {
          row[fieldName] = kendo.parseDate(row[fieldName]);
        }
      }
      // Now generate the actual values
      for (var i = 0; i < grid.columns.length; i++) {
        var fieldName = grid.columns[i].field;
        if (typeof fieldName === 'undefined') {
          continue;
        }
        // Get the template and use it to get the display value
        var tmpl = grid._cellTmpl(grid.columns[i], {});
        var kt = kendo.template(tmpl);
        value = kt(row);
        // Strip any HTML (needs to be inclosed in an outer tag to work)
        // Also strip any elements with the 'no-export' class
        // Also remove any label elements since they get used often in links
        var html = $('<div>' + value + '</div>');
        html.find('.label').remove();
        html.find('.no-export').remove();
        value = html.text().trim();
        // Format for CSV (escape quotes and add the comma)
        value = value.replace(/"/g, '""');
        csv += '"' + value + '"';
        if (i < grid.columns.length - 1) {
          csv += ',';
        }
      }
      csv += '\n';
    });
    // Send the CSV content back to the server to generate a download link
    var csvData = new Blob([csv], {
      type: 'text/csv'
    });
    var fileName = grid.options.excel.fileName + '.csv';
    if (window.navigator.msSaveBlob) {
      // ie
      navigator.msSaveBlob(csvData, fileName);
    } else {
      // other browsers
      var link = document.createElement('a');
      var csvUrl = URL.createObjectURL(csvData);
      link.href = csvUrl;
      link.style = 'visibility:hidden';
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    // Reset back to original values and reset the datasource
    datasource.pageSize(originalPageSize);
    datasource.page(originalPage);
    datasource.view();
    kendo.ui.progress(grid.element, false);
  };
  var saveAsExcel = function($obj) {
    $obj.data('kendoGrid').saveAsExcel();
  };
  var saveAsExcelBlob = function($obj) {
    var grid = $obj.data('kendoGrid');
    kendoGridToCSV(grid);
  };
  var excelFileName = function($obj, fileName) {
    if (!fileName) {
      return $obj.data('kendoGrid').options.excel.fileName;
    } else {
      $obj.data('kendoGrid').options.excel.fileName = fileName;
      $obj.data('kendoGrid').options.excel.allPages = true;
    }
  };
  var selectRowWhenRightClick = function(gridId) {
    var grid = $('#' + gridId).data('kendoGrid');
    $(grid.tbody).on('mousedown', 'td', function(e) {
      var keycode = e.keyCode ? e.keyCode : e.which;
      if (keycode === 3) {
        var row = $(this).closest('tr');
        var rowIdx = $('tr', grid.tbody).index(row);
        // var colIdx = $("td", row).index(this);
        selectRow(gridId, rowIdx);
      }
    });
  };
  var data = function(grid) {
    grid = typeof grid == 'string' ? $('#' + grid).data('kendoGrid') : grid;
    if (!grid) throw Error('invalid grid object.');
    var d = grid.dataSource.data();
    return d ? d : [];
  };
  return {
    selectRow: selectRow,
    selectFirstRow: selectFirstRow,
    selectFirstMatch: selectFirstMatch,
    setUpdateMode: setUpdateMode,
    getUpdateMode: getUpdateMode,
    hasValue: hasValue,
    selectedRows: selectedRows,
    selectedRow: selectedRow,
    selectedRowsIndexs: selectedRowsIndexs,
    selectedRowIndex: selectedRowIndex,
    clear: clear,
    saveAsExcel: saveAsExcel,
    saveAsExcelBlob: saveAsExcelBlob,
    excelFileName: excelFileName,
    selectRowWhenRightClick: selectRowWhenRightClick,
    data: data
  };
})();
