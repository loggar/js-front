/**
 * @Module Dropdown builder and dropdown Utilities
 *
 */
var myDropdown = (function() {
  var config_default = {
    optionLabel: 'Select',
    dataTextField: 'codeNm',
    dataValueField: 'code',
    autoBind: false
  };
  return {
    build: function($obj, dst_url, dst_params, e_success, e_change, setting) {
      if (!$obj) return false;
      if ($.type($obj) === 'array' && $obj.length > 0) {
        myLogger.warn(
          'dropdown-object is an array, all be ignored except $obj[0]. $obj=' +
            $obj
        );
        $obj = $obj[0];
      }
      var config = {
        change: e_change
      };
      for (var key in config_default) {
        config[key] =
          !setting || !setting[key] ? config_default[key] : setting[key];
      }
      for (var key in setting) {
        config[key] = setting[key];
      }
      $obj.kendoDropDownList(config);
      myLogger.debug_ajax_req_start($obj.attr('id'), dst_url, dst_params);
      $.ajax({
        type: 'POST',
        url: dst_url,
        dataType: 'json',
        data: dst_params
      })
        .done(function(response) {
          if (
            response.data &&
            response.data.length &&
            response.data.length > 99
          ) {
            myLogger.log(
              '<DROPDOWN>',
              $obj.attr('id'),
              response.data.slice(0, 99),
              '... total',
              response.data.length
            );
          } else {
            myLogger.log('<DROPDOWN>', $obj.attr('id'), response.data);
          }
          var dropdown = $obj.data('kendoDropDownList');
          dropdown.setDataSource(response.data);
          dropdown.dataSource.read();
          dropdown.refresh();
          if (!!e_success) e_success(response.data);
        })
        .fail(function(response, textStatus, jqXHR) {
          myLogger.debug_ajax_res_fail($obj.attr('id'), response);
          myDataError.cb_req_err_all(response, $obj.attr('id'), dst_url);
        });
    },
    reqDs: function($obj, dst_url, dst_params) {
      myLogger.debug_ajax_req_start($obj.attr('id'), dst_url, dst_params);
      $.ajax({
        type: 'POST',
        url: dst_url,
        dataType: 'json',
        data: dst_params
      })
        .done(function(response) {
          if (
            response.data &&
            response.data.length &&
            response.data.length > 99
          ) {
            myLogger.log(
              '<DROPDOWN>',
              $obj.attr('id'),
              response.data.slice(0, 99),
              '... total',
              response.data.length
            );
          } else {
            myLogger.log('<DROPDOWN>', $obj.attr('id'), response.data);
          }
          var dropdown = $obj.data('kendoDropDownList');
          dropdown.setDataSource(response.data);
          dropdown.dataSource.read();
          dropdown.refresh();
        })
        .fail(function(response, textStatus, jqXHR) {
          myLogger.debug_ajax_res_fail($obj.attr('id'), response);
          myDataError.cb_req_err_all(response, $obj.attr('id'), dst_url);
        });
    },
    init: function($obj, datasource, e_change, setting, cb) {
      if (!$obj) return false;
      if ($.type($obj) === 'array' && $obj.length > 0) {
        myLogger.warn(
          'dropdown-object is an array, all be ignored except $obj[0]. $obj=' +
            $obj
        );
        $obj = $obj[0];
      }
      if (datasource && datasource.length && datasource.length > 99) {
        myLogger.log(
          '<DROPDOWN>',
          $obj.attr('id'),
          datasource.slice(0, 99),
          '... total',
          datasource.length
        );
      } else {
        myLogger.log('<DROPDOWN>', $obj.attr('id'), datasource);
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
      $obj.kendoDropDownList(config);
      var dropdown = $obj.data('kendoDropDownList');
      dropdown.dataSource.read();
      dropdown.refresh();
      if (!!cb) {
        cb(dropdown);
      }
    },
    enable: function($obj, b) {
      if (!b) {
        $obj.data('kendoDropDownList').select(0);
        $obj.data('kendoDropDownList').enable(false);
      } else {
        $obj.data('kendoDropDownList').enable(true);
      }
    },
    readonly: function($obj, b) {
      if (!b) {
        $obj.data('kendoDropDownList').readonly(false);
      } else {
        $obj.data('kendoDropDownList').readonly();
      }
    },
    select: function($obj, v) {
      if (typeof v === 'number') {
        $obj.data('kendoDropDownList').select(v);
      } else {
        $obj.data('kendoDropDownList').value(v);
      }
      $obj.data('kendoDropDownList').trigger('change');
    },
    get: function($obj, key) {
      var drop = $obj.data('kendoDropDownList');
      return drop.dataItem()[key];
    },
    getRow: function($obj) {
      var drop = $obj.data('kendoDropDownList');
      return drop.dataItem();
    },
    clear: function($obj) {
      $obj.data('kendoDropDownList').value('');
    },
    val: function($obj) {
      return $obj.data('kendoDropDownList').value();
    },
    hasValue: function($obj, v) {
      var values = [];
      var dropdown = $obj.data('kendoDropDownList');
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
    data: function($obj) {
      if (!$obj) return false;
      var dropdown = $obj.data('kendoDropDownList');
      var ds = dropdown.dataSource;
      if (!ds || !ds._data || !ds._data.length) {
        return [];
      }
      return ds._data;
    }
  };
})();
