// Stop all ajax request by http://tjrus.com/blog/stop-all-active-ajax-requests
$.xhrPool = []; // array of uncompleted requests
$.xhrPool.abortAll = function () {
  // our abort function
  $(this).each(function (idx, jqXHR) {
    jqXHR.abort();
  });
  $.xhrPool.length = 0;
};

$.ajaxSetup({
  beforeSend: function (jqXHR) {
    // before jQuery send the request we will push it to our array
    $.xhrPool.push(jqXHR);
  },
  complete: function (jqXHR) {
    // when some of the requests completed it will splice from the array
    var index = $.xhrPool.indexOf(jqXHR);
    if (index > -1) {
      $.xhrPool.splice(index, 1);
    }
  },
});
