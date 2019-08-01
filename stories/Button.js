/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import Icon from './assets/icon.svg';

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
))
.add('large', () => (
  <table>
    <tr>
      <th />
      <th>
        Enabled
      </th>
      <th>
        Disabled
      </th>
    </tr>
    <tr>
      <th>
        Primary
      </th>
      <td>
        <Button
          variant={Button.VARIANT.PRIMARY}
          size={Button.SIZE.LARGE}
        >
          Label
        </Button>
      </td>
      <td>
        <Button
          variant={Button.VARIANT.PRIMARY}
          size={Button.SIZE.LARGE}
          disabled
        >
          Label
        </Button>
      </td>
    </tr>
    <tr>
      <th>
        Secondary
      </th>
      <td>
        <Button
          variant={Button.VARIANT.SECONDARY}
          size={Button.SIZE.LARGE}
        >
          Label
        </Button>
      </td>
      <td>
        <Button
          variant={Button.VARIANT.SECONDARY}
          size={Button.SIZE.LARGE}
          disabled
        >
          Label
        </Button>
      </td>
    </tr>
  </table>
))
.add('icon', () => (
  <Container>
    <Button
      variant={select('Variant', variants, defaultVariant)}
      size={select('Size', sizes, defaultSize)}
      disabled={boolean('Disabled')}
      fullWidth={boolean('Full Width')}
    >
      <Icon />
    </Button>
  </Container>
));
