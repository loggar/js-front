/*
How to Disable a particular day every week
 */

function DisableMonday(date) {
	var day = date.getDay();
	// If day == 1 then it is MOnday
	if (day == 1) {
		return [false];
	} else {
		return [true];
	}
}

$(function () {
	$("#datepicker").datepicker({
		beforeShowDay: DisableMonday
	});
});