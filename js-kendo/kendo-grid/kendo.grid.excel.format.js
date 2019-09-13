$("#grid").kendoGrid({
  toolbar: ["excel"],
  excel: {
    fileName: "Kendo UI Grid Export.xlsx",
    proxyURL: "https://demos.telerik.com/kendo-ui/service/export",
    filterable: true
  },
  excelExport: function(e) {
    var sheet = e.workbook.sheets[0];
    for (var rowIndex = 0; rowIndex < sheet.rows.length; rowIndex++) {
      var row = sheet.rows[rowIndex];
      for (var cellIndex = 0; cellIndex < row.cells.length; cellIndex++) {
        var cell = row.cells[cellIndex];
        if (row.type === "data") {
          // log(cellIndex);
          // log(sheet.rows[0].cells[cellIndex].value = "HeaderText");
          if (cellIndex == 3) {
            cell.format = "0.0";
          }
        }
      }
    }
  }
});
