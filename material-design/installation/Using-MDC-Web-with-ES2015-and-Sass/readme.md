# Material Design - Using MDC Web with ES2015 and Sass

It is highly recommended to install Material Components for the web via npm and consume its ES2015 modules and Sass directly. This is outlined in the steps below.

## Webpack with Sass

```shell
npm init
```

`package.json`

```json
{
  "scripts": {
    "start": "webpack-dev-server"
  }
}
```

install webpack

```shell
npm install --save-dev webpack@3 webpack-dev-server@2 css-loader sass-loader node-sass extract-loader file-loader
```
