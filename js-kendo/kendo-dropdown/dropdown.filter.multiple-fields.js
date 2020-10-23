{
  dataTextField : "TRAD_NM",
  dataValueField : "AGENT_ID",
  template : kendo.template($("#agent_id_template").html()),
  filter : "contains",
  filtering : function(ev) {
    var filterValue = ev.filter != undefined ? ev.filter.value : "";
    ev.preventDefault();
    this.dataSource.filter({
      logic : "or",
      filters : [
        {
          field : "AGENT_ID",
          operator : "contains",
          value : filterValue
        }, {
          field : "TRAD_NM",
          operator : "contains",
          value : filterValue
        }
      ]
    });
  }
}