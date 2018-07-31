// browserify or webpack required

var Uppy = require('uppy/lib/core')
var Dashboard = require('uppy/lib/plugins/Dashboard')
var XHRUpload = require('uppy/lib/plugins/XHRUpload')

const uppy = Uppy({ autoProceed: false })
uppy.use(Dashboard, { target: '#drag-drop-area', inline: true })
uppy.use(XHRUpload, { endpoint: 'https://mywebsite.com/receive-file.php' })