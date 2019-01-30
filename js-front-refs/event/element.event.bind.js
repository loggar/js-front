/**
 * @Module bind/unbind events
 * 
 * with jquery
 *
 */
var elementBind = (function() {
  var eventOn = function($obj) {
    $obj.target.off($obj.eventId).on($obj.eventId, $obj.fn);
  };
  var eventOff = function($obj) {
    $obj.target.off($obj.eventId);
  };
  return {
    on: function(bindObjs) {
      if (bindObjs == null || !bindObjs) {
        return false;
      }
      if (Array.isArray(bindObjs)) {
        $.each(bindObjs, function(index, $obj) {
          eventOn($obj);
        });
      } else {
        eventOn(bindObjs);
      }
    },
    off: function(bindObjs) {
      if (bindObjs == null || !bindObjs) {
        return false;
      }
      if (Array.isArray(bindObjs)) {
        $.each(bindObjs, function(index, $obj) {
          eventOff($obj);
        });
      } else {
        eventOff(bindObjs);
      }
    }
  };
})();
