/**
 * @Module bootstrap Please Wait Modal Box
 */
var pleaseWaitModal = (function () {
	/**
	 * Displays overlay with "Please wait" text. Based on bootstrap modal. Contains animated progress bar.
	 */
	var show = function showPleaseWait(boxId, msg) {
		var modalLoading = '<div class="modal" id="'
			+ boxId
			+ '" data-backdrop="static" data-keyboard="false role="dialog">\
			<div class="modal-dialog">\
				<div class="modal-content">\
					<div class="modal-header">\
						<h4 class="modal-title">'
			+ msg
			+ '</h4>\
					</div>\
					<div class="modal-body">\
						<div class="progress">\
							<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar"\
								aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%; height: 40px">\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>';
		$(document.body).append(modalLoading);
		$("#" + boxId).modal("show");
	};
	/**
	 * Hides "Please wait" overlay. See function showPleaseWait().
	 */
	var hide = function hidePleaseWait(boxId) {
		$("#" + boxId).modal("hide");
	};
	return {
		show: show,
		hide: hide
	}
})();