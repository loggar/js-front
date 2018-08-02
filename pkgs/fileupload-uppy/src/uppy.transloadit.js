/*
https://transloadit.com/

https://uppy.io/examples/transloadit/
*/

const Uppy = require('uppy/lib/core')
const Dashboard = require('uppy/lib/plugins/Dashboard')
const Transloadit = require('uppy/lib/plugins/Transloadit')

const uppy = Uppy()
	.use(Dashboard, { target: '#drag-drop-area', inline: true })
	.use(Transloadit, {
		waitForEncoding: true,
		params: {
			auth: { key: YOUR_TRANSLOADIT_KEY },
			steps: {
				resize: {
					width: 250,
					height: 250,
					robot: '/image/resize',
					text: [{ 'text': 'Powered by Uppy', 'font': 'Ubuntu', 'color': '#eeeeee', 'valign': 'bottom', 'align': 'right', 'x_offset': 16, 'y_offset': -10 }]
				}
			}
		}
	})

uppy.on('transloadit:result', (stepName, result) => {
	// use transloadit encoding result here.
	console.log('Result here ====>', stepName, result)
	console.log('Cropped image url is here ====>', result.url)
})
