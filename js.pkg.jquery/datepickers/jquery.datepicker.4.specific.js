/*
How to Disable Weekends in addition to Specific Dates
 */

/** Days to be disabled as an array */
var disableddates = ["12-3-2014", "12-11-2014", "12-25-2014", "12-20-2014"];

function DisableSpecificDates(date) {

	var m = date.getMonth();
	var d = date.getDate();
	var y = date.getFullYear();

	// First convert the date in to the mm-dd-yyyy format 
	// Take note that we will increment the month count by 1 
	var currentdate = (m + 1) + '-' + d + '-' + y;



	// We will now check if the date belongs to disableddates array 
	for (var i = 0; i < disableddates.length; i++) {

		// Now check if the current date is in disabled dates array. 
		if ($.inArray(currentdate, disableddates) != -1) {
			return [false];
		}
	}

	// In case the date is not present in disabled array, we will now check if it is a weekend. 
	// We will use the noWeekends function
	var weekenddate = $.datepicker.noWeekends(date);
	return weekenddate;

}


$(function () {
	$("#datepicker").datepicker({
		beforeShowDay: DisableSpecificDates
	});
});