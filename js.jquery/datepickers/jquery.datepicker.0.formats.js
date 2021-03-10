var sampleDatepicker = (function () {
	var baseDatepickerOption = {
		autoclose: true,
		format: 'dd/mm/yyyy',
		todayHighlight: true,
		todayBtn: 'linked'
	}
	var build = function () {
		$("input[datepicker_today]").each(function (index) {
			$(this).datepicker(baseDatepickerOption).datepicker('setDate', new Date()).attr('readonly', true);
		});
		$("input[datepicker_empty]").each(function (index) {
			$(this).datepicker(baseDatepickerOption).datepicker('setDate', '').attr('readonly', true);
		});
	}
	var init = function (id, d) {
		if (!d) {
			$('input[id="' + id + '"]').datepicker(baseDatepickerOption).attr('readonly', true);
		} else {
			$('input[id="' + id + '"]').datepicker(baseDatepickerOption).attr('readonly', true).datepicker('setDate', d);
		}
	}
	return {
		baseDatepickerOption: baseDatepickerOption,
		build: build,
		init: init
	}
})();