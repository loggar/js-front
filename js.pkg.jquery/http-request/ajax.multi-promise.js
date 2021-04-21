$.when(
  // Get the HTML
  $.get("/feature/", function (html) {
    globalStore.html = html;
  }),

  // Get the CSS
  $.get("/assets/feature.css", function (css) {
    globalStore.css = css;
  }),

  // Get the JS
  $.getScript("/assets/feature.js")
).then(function () {
  // All is ready now, so...

  // Add CSS to page
  $("<style />").html(globalStore.css).appendTo("head");

  // Add HTML to page
  $("body").append(globalStore.html);
});
