$("#grid").kendoGrid({
  columns: [ {
    field: "date",
    format: "{0: yyyy-MM-dd HH:mm:ss}"
  }, {
    field: "number",
    format: "{0:c}"
  } ],
  filterable: true,
  dataSource: [ { date: new Date(), number: 3.1415 } ]
});