// <input name="inputFile" id="inputFile" type="file" multiple="false" />
$("#inputFile").kendoUpload({
  async: false,
  multiple: false,
  showFileList: true,
  localization: {
    select: "Select a file...",
  },
  success: function (e) {
    console.log("inputFile success", e);
  },
  select: function (e) {
    console.log("inputFile select", e);
  },
  complete: function (e) {},
  error: function (e) {},
  upload: function (e) {},
});
