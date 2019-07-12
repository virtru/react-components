import React from 'react';
import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/react';
import 'loki/configure-react';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';
import 'virtru-typography';

import styles from './styles.css';


addParameters({
  options: {
    theme: themes.dark,
  },
});

addDecorator(Story => (
  <div className={styles.container}>
    <Story />
  </div>
));

addDecorator(withKnobs);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../stories', false, /\.js$/));
}

configure(loadStories, module);
