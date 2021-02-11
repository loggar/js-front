(function (window) {
  window.watchResize = function (callback) {
    var resizing;
    callback.size = 0;
    function done() {
      var curr_size = window.innerWidth;
      clearTimeout(resizing);
      resizing = null;
      // only run on a true resize
      if (callback.size != curr_size) {
        callback();
        callback.size = curr_size;
      }
    }
    window.addEventListener("resize", function () {
      if (resizing) {
        clearTimeout(resizing);
        resizing = null;
      }
      resizing = setTimeout(done, 50);
    });
    callback();
  };
  // watch browser width on resize
  window.watch_resize_browser_width = 0;
  // watch browser width on resize
  window.watchResize(function () {
    window.watch_resize_browser_width =
      window.innerWidth || document.body.offsetWidth;
  });
})(window);
