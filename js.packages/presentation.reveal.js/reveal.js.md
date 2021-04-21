# Reveal.js

## Installation (Full Setup)

```
$ git clone https://github.com/hakimel/reveal.js.git

$ cd reveal.js && npm install

$ npm start
```

## Installing From npm

```
npm install reveal.js
# or
yarn add reveal.js
```

```js
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

let deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
```

You'll also need to include the reveal.js styles and a presentation theme.

```
<link rel="stylesheet" href="/node_modules/reveal.js/dist/reveal.css">
<link rel="stylesheet" href="/node_modules/reveal.js/dist/theme/black.css">
```
