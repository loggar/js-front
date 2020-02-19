var popupView = (function() {
	var p = {};
	var open = function(id, url) {
		var w = p[id];
		if (!w || w.closed) {
			p[id] = window.open(url, "_blank");
		} else {
			w.focus();
		}
	}
	return {
		open : open
	}
})();

module.exports = popupView;
