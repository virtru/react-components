import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssVariables from 'postcss-css-variables';

const cssExportMap = {};

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'esm',
  },
  external: [
    'react',
    'prop-types',
  ],
  plugins: [
    postcss({
      modules: true,
      plugins: [
        postcssImport({
          path: './lib',
        }),
        postcssVariables(),
      ],
      extract: 'dist/styles.css',
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
  ],
};
