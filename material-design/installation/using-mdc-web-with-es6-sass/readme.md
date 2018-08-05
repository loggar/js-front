# Material Design - Using MDC Web with ES2015 and Sass

It is highly recommended to install Material Components for the web via npm and consume its ES2015 modules and Sass directly. This is outlined in the steps below.

## Webpack with Sass

```shell
npm init
```

install webpack

```shell
npm install --save-dev webpack webpack-cli webpack-dev-server css-loader sass-loader node-sass extract-loader file-loader
```

`package.json`

```json
{
  "scripts": {
    "start": "webpack-dev-server"
  }
}
```

webpack configuration for Sass

```js
// webpack.config.js
module.exports = [{
  entry: './scss/app.scss',
  output: {
    // This is necessary for webpack to compile
    // But we never use style-bundle.js
    filename: 'style-bundle.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'bundle.css',
          },
        },
        { loader: 'extract-loader' },
        { loader: 'css-loader' },
        { loader: 'sass-loader' },
      ]
    }]
  },
}];

```

```html
<!-- sample index.html -->
<html>
 <head>
   <link rel="stylesheet" href="bundle.css">
 </head>
 <body>Hello World</body>
</html>
```

```scss
// app.scss
body {
	color: blue;
}
```

test the webpack configuration

```shell
npm start
```

## Include CSS for a component

install a material component.

```shell
npm install --save-dev @material/button
```

We need to configure `sass-loader` to understand the `@material` imports used by MDC Web. Update your `webpack.config.js` by changing `{ loader: 'sass-loader' }` to:

```js
// webpack.config.js
{
	loader: 'sass-loader',
	options: {
		includePaths: ['./node_modules']
	}
}
```

In order to add vendor-specific styles to the Sass files, we need to configure autoprefixer through PostCSS.

You’ll need all of these Node dependencies:

* autoprefixer: Parses CSS and adds vendor prefixes to CSS rules
* postcss-loader: Loader for Webpack used in conjunction with autoprefixer

```shell
npm install --save-dev autoprefixer postcss-loader
```

```js
// webpack.config.js
const autoprefixer = require('autoprefixer');
// ...
	{
		loader: 'file-loader',
		options: {
			name: 'bundle.css',
		},
	},
	{ loader: 'extract-loader' },
	{ loader: 'css-loader' },
	{
		loader: 'postcss-loader',
		options: {
			plugins: () => [autoprefixer()]
		}
	},
	{
		loader: 'sass-loader',
		options: {
			includePaths: ['./node_modules']
		}
	}
```

We need to tell our app.scss to import the Sass files for @material/button. We can also use Sass mixins to customize the button. Replace your “hello world” version of app.scss with this code:

```scss
@import "@material/button/mdc-button";

.foo-button {
  @include mdc-button-ink-color(teal);
  @include mdc-states(teal);
}
```

```html
<!-- index.html -->
<html>

<head>
	<link rel="stylesheet" href="bundle.css">
</head>

<body>
	<button class="foo-button mdc-button">
		Button
	</button>
</body>

</html>
```

```shell
npm start
```

## Webpack with ES2015

install babel

```
npm install --save-dev babel-core babel-loader babel-preset-env
```

configure babel

```json
// .babelrc
{
	"presets": [
		"env"
	],
	"plugins": []
}
```

entry point

```js
// app.js
console.log('hello world');
```

```html
<!-- index.html -->
<script src="bundle.js" async></script>
```

configure webpack to convert app.js into bundle.js by modifying the following properties in the webpack.config.js file,

and add rule for js transpiling:

```js
// webpack.config.js
const autoprefixer = require('autoprefixer');

module.exports = [{
	entry: [
		'./app.scss',
		'./app.js'
	],
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: 'bundle.css',
					},
				},
				{ loader: 'extract-loader' },
				{ loader: 'css-loader' },
				{
					loader: 'postcss-loader',
					options: {
						plugins: () => [autoprefixer()]
					},
				},
				{
					loader: 'sass-loader',
					options: {
						includePaths: ['./node_modules']
					},
				}],
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			query: {
				presets: ['env'],
			}
		}],
	},
}];
```

```shell
npm start
```

# Include JavaScript for a component

install a component

```shell
npm install --save-dev @material/ripple
```

import js modules

```js
// app.js
import { MDCRipple } from '@material/ripple';
const ripple = new MDCRipple(document.querySelector('.foo-button'));
```
