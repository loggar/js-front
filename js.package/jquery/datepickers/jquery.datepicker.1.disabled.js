$("#birthday").datepicker().attr('disabled', true);

$("#datepicker").datepicker({ minDate: -1, maxDate: -2 }).attr('readonly', 'readonly');

$("#datepicker").datepicker({
	beforeShow: function (i) { if ($(i).attr('readonly')) { return false; } }
});
