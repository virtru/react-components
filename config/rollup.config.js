const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const postcss = require('rollup-plugin-postcss');
const svg = require('rollup-plugin-svg');
const postcssHexRgba = require('postcss-hexrgba');
const postcssImport = require('postcss-import');
const postcssCustomProperties = require('postcss-custom-properties');

const postcssConfig = {
  modules: true,
  plugins: [
    postcssImport({
      path: './lib/styles',
    }),
    postcssCustomProperties({
      preserve: false,
      importFrom: ['./lib/styles/colors.css', './lib/styles/forms.css', './lib/styles/text.css'],
    }),
    postcssHexRgba,
  ],
  extract: 'dist/styles.css',
};

module.exports.postcssConfig = postcssConfig;
module.exports.default = {
  input: 'lib/index.js',
  output: [
    {
      file: 'dist/bundle.esm.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: ['react', 'prop-types'],
  plugins: [
    postcss(postcssConfig),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    svg(),
  ],
};
