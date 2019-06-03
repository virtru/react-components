const path = require('path');


module.exports = async ({ config }) => {
  config.module.rules = config.module.rules
    .filter(rule => !rule.test.test('styles.css'))
    .concat({
      test: /\.css$/,
      include: [
        path.join(__dirname),
        path.join(__dirname, '../lib'),
      ],
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: path.join(__dirname, '../config'),
            },
          },
        },
      ],
    });

  return config;
};
