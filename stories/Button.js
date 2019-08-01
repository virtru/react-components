/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import { Button } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const variants = Object.values(Button.VARIANT);
const sizes = Object.values(Button.SIZE);
const defaultVariant = Button.VARIANT.SECONDARY;
const defaultSize = Button.SIZE.MEDIUM;

storiesOf('Button', module).lokiSkip('default', () => (
  <Container>
    <Button
      variant={select('Variant', variants, defaultVariant)}
      size={select('Size', sizes, defaultSize)}
      disabled={boolean('Disabled')}
      fullWidth={boolean('Full Width')}
    >
      {text('Button label', 'Label')}
    </Button>
  </Container>
));
