var isIE = !!window.MSInputMethodContext && !!document.documentMode;
var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

if (isIE || isFirefox) {
  var pageStylesheet = document.createElement("link");
  pageStylesheet.rel = "stylesheet";
  pageStylesheet.type = "text/css";
  pageStylesheet.href = "/path/to/styles.css";
  document.head.appendChild(pageStylesheet);
}
