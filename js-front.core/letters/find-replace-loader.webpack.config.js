// npm install --save-dev string-replace-loader

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "string-replace-loader",
        options: {
          search: "/\bLOGO\b/g",
          replace: 'L<span class="special-o">O</span>GO',
        },
      },
    ],
  },
};
