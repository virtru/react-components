/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import { Input } from '../lib';

storiesOf('Input', module).add('default', () => {
  const errorTypes = ['boolean', 'string'];
  const [defaultErrorType] = errorTypes;

  const errorType = select('Error type', errorTypes, defaultErrorType);

  return (
    <div style={{ width: '400px', display: 'flex' }}>
      <Input
        error={errorType === 'boolean' ? boolean('Has error', false) : text('Error message', '')}
        info={text('Info message', '')}
        value={text('Input value', 'Type here')}
        disabled={boolean('Is disabled', false)}
      />
    </div>
  );
});
