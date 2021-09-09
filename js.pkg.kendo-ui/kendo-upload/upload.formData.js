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
    console.log("inputStudentLocationFile select", e);
    var files = e.files;
    if (!files || files.length < 1) {
      e.preventDefault();
      return false;
    }
    var acceptedFiles = [".xlsx", ".xls", ".csv"];
    var isAcceptedFormat = $.inArray(files[0].extension, acceptedFiles) != -1;
    if (!isAcceptedFormat) {
      e.preventDefault();
      return false;
    }
    var formData = new FormData();
    formData.append("file", files[0].rawFile);
    // request with formData
  },
  complete: function (e) {},
  error: function (e) {},
  upload: function (e) {},
});
