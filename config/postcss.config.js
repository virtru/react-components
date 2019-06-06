const postcssImport = require('postcss-import')({ path: './lib/styles/' });
const hexrgba = require('postcss-hexrgba');

module.exports = {
  plugins: [
    postcssImport,
    hexrgba,
  ],
};
