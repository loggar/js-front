/*
https://uppy.io/docs/server/
*/

var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')
var uppy = require('uppy-server')

var app = express()
app.use(bodyParser.json())
app.use(session({ secret: 'some secrety secret' }))
// ...
// be sure to place this anywhere after app.use(bodyParser.json()) and app.use(session({...})
const options = {
	providerOptions: {
		google: {
			key: 'GOOGLE_KEY',
			secret: 'GOOGLE_SECRET'
		}
	},
	server: {
		host: 'localhost:3020',
		protocol: 'http',
	},
	filePath: '/path/to/folder/'
}

app.use(uppy.app(options))
