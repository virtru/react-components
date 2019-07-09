/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';

import { Input } from '../lib';

storiesOf('Input', module).add('default', () => (
  <div style={{ width: '400px', display: 'flex' }}>
    <Input
      error={text('Error message', '')}
      info={text('Info message', '')}
      value={text('Input value', 'Type here')}
      disabled={boolean('Is disabled', false)}
    />
  </div>
));
