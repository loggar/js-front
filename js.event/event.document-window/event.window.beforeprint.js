window.onbeforeprint = function (event) {
  var d = new Date();
  var fd = d.toLocaleDateString() + " " + d.toLocaleTimeString();
  console.log(fd);
};
