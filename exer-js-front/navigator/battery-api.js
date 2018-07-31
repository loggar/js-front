// Get the battery!
var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

// A few useful battery properties
console.warn("Battery charging: ", battery.charging); // true
console.warn("Battery level: ", battery.level); // 0.58
console.warn("Battery discharging time: ", battery.dischargingTime);

// Add a few event listeners
battery.addEventListener("chargingchange", function (e) {
	console.warn("Battery charge change: ", battery.charging);
}, false);