import {
  configure,
  addParameters,
  addDecorator,
} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';
import 'virtru-typography';

import './styles.css';


addParameters({
  options: {
    theme: themes.dark,
  },
});

addDecorator(withInfo({
  header: false,
  inline: true,
}));

addDecorator(withKnobs);

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../stories', false, /\.js$/));
}

configure(loadStories, module);
