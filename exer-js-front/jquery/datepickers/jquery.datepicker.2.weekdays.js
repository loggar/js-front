/*
How to Disable Weekends
*/

$(function () {
	$("#datepicker").datepicker({
		beforeShowDay: $.datepicker.noWeekends
	});
});