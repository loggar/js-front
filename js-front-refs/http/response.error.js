/**
 * @Module How to react ajax request fail
 */
var myDataError = (function() {
  var errOccur = false;
  return {
    cb_req_err_all: function(data, id, url) {
      logger.error("error", {
        id: id,
        url: url,
        data: data
      });
      if (!errOccur) {
        alert(
          "An error has occured - error code : FRONTERR_" + id.toUpperCase()
        );
        errOccur = true;
      }
    }
  };
})();
