/**
 * @Module Logger for js console
 *
 */
var jsConsoleLogger = (function() {
  var fnLogger = console.log.bind(console);
  var CONSOLE_DEBUG_MODE = false;
  var EMPTY_OBJECT = {};
  return {
    enable: function() {
      return CONSOLE_DEBUG_MODE;
    },
    setMode: function(mode) {
      CONSOLE_DEBUG_MODE = mode;
    },
    debug_ajax_req_start: function(id, url, params) {
      if (CONSOLE_DEBUG_MODE) {
        fnLogger("<REQ>", id, url, !params ? EMPTY_OBJECT : params);
      }
    },
    debug_ajax_req_start_multipart: function(id, url, formData) {
      if (CONSOLE_DEBUG_MODE) {
        fnLogger("<REQ>", id, url, formData);
        fnLogger("formData Deep");
        for (var pair of formData.entries()) {
          fnLogger(pair[0] + ":");
          fnLogger(typeof pair[1]);
          fnLogger(pair[1]);
        }
      }
    },
    debug_ajax_res_end: function(id, jqXHR) {
      if (CONSOLE_DEBUG_MODE) {
        if (jqXHR.data) {
          if (jqXHR.data && jqXHR.data.length && jqXHR.data.length > 9) {
            fnLogger(
              "<RES>",
              id,
              jqXHR.data.slice(0, 9),
              "... total",
              jqXHR.data.length
            );
          } else {
            fnLogger("<RES>", id, jqXHR.data);
          }
        } else {
          fnLogger("<RES>", id, jqXHR);
        }
      }
    },
    debug_ajax_res_fail: function(id, jqXHR) {
      if (CONSOLE_DEBUG_MODE) {
        fnLogger("<RES> FAIL", id);
      }
    },
    log: function() {
      if (CONSOLE_DEBUG_MODE) {
        fnLogger.apply(null, [...arguments]);
      }
    },
    debug: function() {
      if (CONSOLE_DEBUG_MODE) {
        fnLogger.apply(null, ["<DEBUG>", ...arguments]);
      }
    },
    info: function() {
      fnLogger.apply(null, ["<INFO>", ...arguments]);
    },
    warn: function() {
      fnLogger.apply(null, ["<WARN>", ...arguments]);
    },
    error: function() {
      fnLogger.apply(null, ["<ERROR>", ...arguments]);
    }
  };
})();
var logger = (function() {
  if (locationUtil.isLocal()) jsConsoleLogger.setMode(true);
  else jsConsoleLogger.setMode(false);
  return jsConsoleLogger;
})();
