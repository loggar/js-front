/*
https://uppy.io/docs/webcam/
*/

const Webcam = require('uppy/lib/plugins/Webcam')

uppy.use(Webcam, {
	countdown: false,
	mirror: true,
	facingMode: 'user',
	target: Dashboard // Webcam will be installed to the Dashboard
})