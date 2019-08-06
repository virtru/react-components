const htmlTags = require('html-tags');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
  ],
  plugins: [
    'stylelint-selector-tag-no-without-class',
  ],
  rules: {
    'plugin/selector-tag-no-without-class': htmlTags,
    'declaration-property-unit-whitelist': {
      'font-size': ['em', 'rem'],
      'line-height': ['em', 'rem'],
    },
    'custom-property-empty-line-before': null,
  },
  ignoreFiles: [
    './coverage/**/*.css',
    './devops-ansible/**/*.css',
    './dist/**/*.css'
  ],
};
