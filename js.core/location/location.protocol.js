var eventSourceName = "notificationMsg";

var eventSourceUrl =
  window.location.protocol +
  "//" +
  window.location.host +
  "/sse" +
  eventSourceName +
  "/subscribe";

console.log(eventSourceUrl);
