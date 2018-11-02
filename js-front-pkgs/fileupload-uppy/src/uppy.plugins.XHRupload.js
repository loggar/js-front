/*
https://uppy.io/docs/xhrupload/
*/

const XHRUpload = require('uppy/lib/plugins/XHRUpload')

uppy.use(XHRUpload, {
	endpoint: 'http://my-website.org/upload'
})