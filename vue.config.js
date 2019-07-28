// vue.config.js
module.exports = {
  module: {
    rules: [{ test: /\.(svg|png|jpe?g|gif)(\?.*)?$/, use: "file-loader" }]
  }
};
