var windowsView = {
	open: function (actionUrl, inputList) {
		var _reportReady = window.open("/windows/ready", "_blank");
		_reportReady.onload = function () {
			var $form = $(_reportReady.document).find('#windowActionForm');
			$form.attr("action", "/windows/" + actionUrl);
			$form.attr("method", "post");
			if (inputList) {
				for (var i = 0; i < inputList.length; i++) {
					$('<input />').attr('type', 'hidden').attr('name', inputList[i].name).attr('value', inputList[i].value).appendTo($form);
				}
			}
			$form.submit();
		};
	}
};
var objectViewer = {
	viewUrl: function (filePath, fileName, fileOrgName) {
		var fileUrl = fileUtil.getFileUrl(filePath, fileName);
		if (!fileUrl) {
			return false;
		}
		var actionUrl = "fileObjViewer";
		var inputList = [];
		inputList.push({
			name: "fileUrl",
			value: fileUrl
		});
		windowsView.open(actionUrl, inputList);
	}
}