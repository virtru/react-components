/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';

import Button from '../lib/Button/Button';

const variants = Object.values(Button.VARIANT);
const [defaultVariant] = variants;

storiesOf('Button', module).add('default', () => (
  <Button
    variant={select('variant', variants, defaultVariant)}
    selected={boolean('selected', false)}
    fullWidth={boolean('full width', false)}
  >
    {text('text', 'Example')}
  </Button>
));
