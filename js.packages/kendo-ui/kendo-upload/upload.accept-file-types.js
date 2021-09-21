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
    var files = e.files;
    var acceptedFiles = [".xlsx", ".xls", ".csv"];
    var isAcceptedFormat = $.inArray(files[0].extension, acceptedFiles) != -1;
    if (!isAcceptedFormat) {
      e.preventDefault();
    }
  },
  complete: function (e) {},
  error: function (e) {},
  upload: function (e) {},
});
