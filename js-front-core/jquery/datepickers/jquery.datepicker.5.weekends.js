/*
How to Disable Weekdays
 */

function DisableWeekDays(date) {

	var weekenddate = $.datepicker.noWeekends(date);

	// In order to disable weekdays, we will invert the value returned by noWeekends functions.
	// noWeekends return an array with the first element being true/false.. So we will invert the first element

	var disableweek = [!weekenddate[0]];
	return disableweek;
}

$(function () {
	$("#datepicker").datepicker({
		beforeShowDay: DisableWeekDays
	});
});