## Configuring a Sass Importer for Nested node_modules

It is possible to end up with nested node_modules folders if you have dependencies on conflicting versions of individual MDC Web packages. This may lead to errors when attempting to compile Sass with the includePaths configuration shown above, since Sass is only scanning for @material packages under the top-level node_modules directory.

Alternatively, you can implement an importer as follows, which makes use of node’s module resolution algorithm to find the dependency nearest to the file that imported it:

```js
// materialImporter.js
const path = require('path');

function tryResolve_(url, sourceFilename) {
	// Put require.resolve in a try/catch to avoid node-sass failing with cryptic libsass errors
	// when the importer throws
	try {
		return require.resolve(url, { paths: [path.dirname(sourceFilename)] });
	} catch (e) {
		return '';
	}
}

function tryResolveScss(url, sourceFilename) {
	// Support omission of .scss and leading _
	const normalizedUrl = url.endsWith('.scss') ? url : `${url}.scss`;
	return tryResolve_(normalizedUrl, sourceFilename) ||
		tryResolve_(path.join(path.dirname(normalizedUrl), `_${path.basename(normalizedUrl)}`),
			sourceFilename);
}

function materialImporter(url, prev) {
	if (url.startsWith('@material')) {
		const resolved = tryResolveScss(url, prev);
		return { file: resolved || url };
	}
	return { file: url };
}

module.exports = materialImporter;
```

```js
// webpack.config.js
const autoprefixer = require('autoprefixer');
const materialImporter = require('./materialImporter');

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
						importer: materialImporter
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
