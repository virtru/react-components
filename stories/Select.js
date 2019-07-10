/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';

import { Select } from '../lib';

storiesOf('Select', module).add('default', () => (
  <div style={{ width: '400px', display: 'flex' }}>
    <Select
      placeholder={text('Placeholder', 'Select an Option')}
      options={Array.from({ length: 5 }).map((_, index) => ({
        label: `Menu Option`,
        value: index,
      }))}
    />
  </div>
));
