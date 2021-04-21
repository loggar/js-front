/**
 * @Module bootstrap Modal Box for Student Timetable Print(HTML)
 */
var modalStudentTimetable = (function() {
  var hide = function(boxId) {
    $('#' + boxId).modal('hide');
    $('#' + boxId).remove();
  };
  var show = function(boxId, body, cssText) {
    var cssArea = cssText ? '<style>' + cssText + '</style>' : '';
    var ModalTimetableDiv = `<div class="modal" id="${boxId}" data-backdrop="static" data-keyboard="false role="dialog">
			<div class="modal-dialog" style="width: 840px;" >
				<div class="modal-content">
					<div class="modal-body" id="${boxId}_printArea">
						${cssArea}
						${body}
					</div>
				</div>
			</div>
		</div>`;
    $(document.body).append(ModalTimetableDiv);
    $('#' + boxId).modal('show');
    $('#' + boxId + '_printArea').printThis({
      importCSS: true,
      importStyle: true,
      afterPrint: function() {
        hide(boxId);
      }
    });
  };
  return {
    show: show,
    hide: hide
  };
})();
