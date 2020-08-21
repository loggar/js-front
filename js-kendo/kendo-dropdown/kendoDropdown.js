/**
 * @Module Dropdown builder and dropdown Utilities
 *
 */
var myDropdown = (function () {
  var adjustDropDownWidth = function (e) {
    var listContainer = e.sender.list.closest(".k-list-container");
    listContainer.width(listContainer.width() + kendo.support.scrollbar());
  };
  var maxItemDebugging = 99;
  var config_default = {
    optionLabel: "Select",
    dataTextField: "codeNm",
    dataValueField: "code",
    autoBind: false,
  };
  var build = function ($obj, dst_url, dst_params, cb, e_change, setting) {
    if (!$obj) {
      myLogger.warn("dropdown object not exist");
      return false;
    }
    if ($.type($obj) !== "array") {
      if (!$obj.length) {
        myLogger.debug("fail to select dropdown object", dst_url);
        return false;
      }
      $obj = [$obj];
    }
    if (!$obj.length) {
      myLogger.warn("dropdown array has no item");
      return false;
    }
    var config = {
      change: e_change,
    };
    for (var key in config_default) {
      config[key] =
        !setting || !setting[key] ? config_default[key] : setting[key];
    }
    for (var key in setting) {
      config[key] = setting[key];
    }
    if (!!setting && setting.adjustItemsWidth) {
      config.open = adjustDropDownWidth;
    }
    var req_option = {
      type: "POST",
      url: dst_url,
      dataType: "json",
      data: dst_params,
    };
    var dropdownIds = jQuery
      .map($obj, function (n, i) {
        return n.attr("id");
      })
      .join(", ");
    myLogger.debug_ajax_req_start(dropdownIds, req_option);
    $.ajax(req_option)
      .done(function (response) {
        $.each($obj, function (index, item) {
          item.kendoDropDownList(config);
          if (
            response.data &&
            response.data.length &&
            response.data.length > maxItemDebugging
          ) {
            myLogger.log(
              "<DROPDOWN>",
              item.attr("id"),
              response.data.slice(0, maxItemDebugging + 1),
              "... total",
              response.data.length
            );
          } else {
            myLogger.log("<DROPDOWN>", item.attr("id"), response.data);
          }
          var dropdown = item.data("kendoDropDownList");
          if (!!setting && setting.adjustItemsWidth && dropdown.list) {
            dropdown.list.width("auto");
          }
          if (dropdown) {
            dropdown.setDataSource(response.data);
            dropdown.dataSource.read();
            dropdown.refresh();
          }
          if (!!cb) {
            cb(response.data);
          }
        });
      })
      .fail(function (response, textStatus, jqXHR) {
        myLogger.debug_ajax_res_fail(dropdownIds, response);
        myDataError.cb_req_err_all(response, dropdownIds, dst_url);
      });
  };
  var init = function ($obj, datasource, e_change, setting, cb) {
    if (!$obj) return false;
    if ($.type($obj) === "array" && $obj.length > 0) {
      myLogger.warn(
        "dropdown-object is an array, all be ignored except $obj[0]. $obj=" +
          $obj
      );
      $obj = $obj[0];
    }
    if (
      datasource &&
      datasource.length &&
      datasource.length > maxItemDebugging
    ) {
      myLogger.log(
        "<DROPDOWN>",
        $obj.attr("id"),
        datasource.slice(0, maxItemDebugging + 1),
        "... total",
        datasource.length
      );
    } else {
      myLogger.log("<DROPDOWN>", $obj.attr("id"), datasource);
    }
    var config = {};
    if (!!e_change) config.change = e_change;
    if (!!datasource) config.dataSource = datasource;
    for (var key in config_default) {
      config[key] =
        !setting || !setting[key] ? config_default[key] : setting[key];
    }
    for (var key in setting) {
      config[key] = setting[key];
    }
    if (!!setting && setting.adjustItemsWidth) {
      config.open = adjustDropDownWidth;
    }
    $obj.kendoDropDownList(config);
    var dropdown = $obj.data("kendoDropDownList");
    if (!!setting && setting.adjustItemsWidth && dropdown.list) {
      dropdown.list.width("auto");
    }
    dropdown.dataSource.read();
    dropdown.refresh();
    if (!!cb) {
      cb(dropdown);
    }
  };
  var isKendoDropdown = function ($obj) {
    return $obj.data("kendoDropDownList") ? true : false;
  };
  var replaceData = function ($obj, datasource, cb) {
    if (!$obj) {
      myLogger.warn("dropdown object not exist");
      return false;
    }
    if ($.type($obj) === "array" && $obj.length > 0) {
      myLogger.warn(
        "dropdown-object is an array, all be ignored except $obj[0]. $obj=" +
          $obj
      );
      $obj = $obj[0];
    }
    if (
      datasource &&
      datasource.length &&
      datasource.length > maxItemDebugging
    ) {
      myLogger.log(
        "<DROPDOWN>",
        $obj.attr("id"),
        datasource.slice(0, maxItemDebugging + 1),
        "... total",
        datasource.length
      );
    } else {
      myLogger.log("<DROPDOWN>", $obj.attr("id"), datasource);
    }
    var dropdown = $obj.data("kendoDropDownList");
    dropdown.setDataSource(datasource);
    dropdown.dataSource.read();
    dropdown.refresh();
    if (!!cb) {
      cb(dropdown);
    }
  };
  var replaceDsFromUrl = function ($obj, url, dst_params, cb) {
    if (!$obj) {
      myLogger.warn("dropdown object not exist");
      return false;
    }
    if ($.type($obj) === "array" && $obj.length > 0) {
      myLogger.warn(
        "dropdown-object is an array, all be ignored except $obj[0]. $obj=" +
          $obj
      );
      $obj = $obj[0];
    }
    myData.ajax(
      $obj.attr("id"),
      url,
      dst_params,
      $obj.attr("id"),
      null,
      function (r) {
        replaceData($obj, r.data || [], cb);
      }
    );
  };
  var getJson = function ($obj, dst_url, e_change, setting, cb) {
    $.getJSON(dst_url + ".json", function (data) {
      init($obj, data, e_change, setting, cb);
    });
  };
  var generateYearsDatasource = function (start, end, order) {
    end = end || new Date().getFullYear();
    start = start || end - 20;
    order = order || "asc";
    var yearsDatasource = [];
    for (var i = start; i <= end; i++) {
      yearsDatasource.push({
        code: i,
        codeNm: i,
      });
    }
    if (order == "desc") {
      yearsDatasource.sort(function (a, b) {
        return b.code - a.code;
      });
    }
    return yearsDatasource;
  };
  var generateMonthDatasource = function (start, end) {
    var monthDatasource = [];
    var codeNmArray = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    for (var i = start; i <= end; i++) {
      monthDatasource.push({
        code: i,
        codeNm: codeNmArray[i - 1],
      });
    }
    return monthDatasource;
  };
  var buildYears = function ($obj, option, e_change, setting, cb) {
    if (!option) {
      option = {
        order: "asc",
      };
    }
    init(
      $obj,
      generateYearsDatasource(option.start, option.end, option.order),
      e_change,
      setting,
      cb
    );
  };
  var buildMonths = function ($obj, option, e_change, setting, cb) {
    if (!option) {
      option = {
        order: "asc",
      };
    }
    init($obj, generateMonthDatasource(1, 12), e_change, setting, cb);
  };
  var enable = function ($obj, b) {
    if (!$obj || !$obj.data("kendoDropDownList")) {
      return false;
    }
    if (!b) {
      $obj.data("kendoDropDownList").select(0);
      $obj.data("kendoDropDownList").enable(false);
    } else {
      $obj.data("kendoDropDownList").enable(true);
    }
  };
  var readonly = function ($obj, b) {
    if (!$obj || !$obj.data("kendoDropDownList")) {
      return false;
    }
    if (!b) {
      $obj.data("kendoDropDownList").readonly(false);
    } else {
      $obj.data("kendoDropDownList").readonly();
    }
  };
  var val = function ($obj, dv) {
    if (!$obj || !$obj.data("kendoDropDownList")) {
      return dv || "";
    }
    if (!dv) {
      return $obj.data("kendoDropDownList").value();
    } else {
      return $obj.data("kendoDropDownList").value() || dv;
    }
  };
  var clear = function ($obj, bTrigChange = true) {
    if (!$obj || !$obj.data("kendoDropDownList")) {
      return false;
    }
    var v_old = $obj.data("kendoDropDownList").value();
    $obj.data("kendoDropDownList").value("");
    var v_new = "";
    if ((!v_new && v_old) || (v_new && !v_old) || v_new != v_old) {
      if (bTrigChange) {
        $obj.data("kendoDropDownList").trigger("change");
      }
    }
  };
  var select = function ($obj, v, bTrigChange = true) {
    if (!$obj || !$obj.data("kendoDropDownList")) {
      return false;
    }
    try {
      var v_old = $obj.data("kendoDropDownList").value();
      var v_new = "";
      if (v) {
        $obj.data("kendoDropDownList").value(v);
        v_new = v;
      } else {
        $obj.data("kendoDropDownList").select(0);
      }
      if ((!v_new && v_old) || (v_new && !v_old) || v_new != v_old) {
        if (bTrigChange) {
          $obj.data("kendoDropDownList").trigger("change");
        }
      }
    } catch (err) {
      myLogger.error($obj.attr("id"), err);
    }
  };
  var selectIndex = function ($obj, i, bTrigChange = true) {
    if (!$obj || !$obj.data("kendoDropDownList")) {
      return false;
    }
    var v_old = $obj.index();
    var v_new = 0;
    if (typeof i === "number" && i > 0) {
      $obj.data("kendoDropDownList").select(i);
      v_new = i;
    } else {
      $obj.data("kendoDropDownList").select(0);
    }
    if ((!v_new && v_old) || (v_new && !v_old) || v_new != v_old) {
      if (bTrigChange) {
        $obj.data("kendoDropDownList").trigger("change");
      }
    }
  };
  return {
    build: build,
    init: init,
    isKendoDropdown: isKendoDropdown,
    replaceData: replaceData,
    replaceDsFromUrl: replaceDsFromUrl,
    getJson: getJson,
    buildYears: buildYears,
    buildMonths: buildMonths,
    enable: enable,
    readonly: readonly,
    val: val,
    clear: clear,
    select: select,
    selectIndex: selectIndex,
    get: function ($obj, key) {
      var drop = $obj.data("kendoDropDownList");
      return drop.dataItem()[key];
    },
    getRow: function ($obj) {
      var drop = $obj.data("kendoDropDownList");
      return drop.dataItem();
    },
    hasValue: function ($obj, v) {
      var values = [];
      var dropdown = $obj.data("kendoDropDownList");
      var ds = dropdown.dataSource;
      if (!ds || !ds._data || !ds._data.length) {
        return false;
      }
      var r = false;
      for (var i = 0; i < ds._data.length; i++) {
        var val = ds._data[i].value;
        if (v == val) {
          r = true;
          break;
        }
      }
      return r;
    },
    data: function ($obj) {
      if (!$obj) return false;
      var dropdown = $obj.data("kendoDropDownList");
      var ds = dropdown.dataSource;
      if (!ds || !ds._data || !ds._data.length) {
        return [];
      }
      return ds._data;
    },
    getData: function (dropdown) {
      var ds = dropdown.dataSource;
      if (!ds || !ds._data || !ds._data.length) {
        return [];
      }
      return ds._data;
    },
    dataPlainYn: function () {
      return [
        {
          codeNm: "Y",
          code: "Y",
        },
        {
          codeNm: "N",
          code: "N",
        },
      ];
    },
    dataPlainBool: function () {
      return [
        {
          codeNm: "True",
          code: "True",
        },
        {
          codeNm: "False",
          code: "False",
        },
      ];
    },
  };
})();
