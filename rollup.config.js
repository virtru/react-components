import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssCustomProperties from 'postcss-custom-properties';

const cssExportMap = {};

export default {
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
        postcssCustomProperties({
          preserve: false,
          importFrom: [
            './lib/styles/colors.css',
            './lib/styles/forms.css',
            './lib/styles/text.css',
          ],
        }),
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
