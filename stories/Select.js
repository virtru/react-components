/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';

import { Select } from '../lib';

storiesOf('Select', module).add('default', () => {
  const optionsCount = number('Number of options', 5);
  const optionPrefix = text('Option prefix', 'Menu Option');
  const isShowIndex = boolean('Show option index', true);

  return (
    <div style={{ width: '400px', display: 'flex' }}>
      <Select
        placeholder={text('Placeholder', 'Select an Option')}
        options={Array.from({ length: optionsCount }).map((_, index) => ({
          label: `${optionPrefix} ${isShowIndex ? index + 1 : ''}`.trim(),
          value: index,
        }))}
        isDisabled={boolean('Is disabled', false)}
      />
    </div>
  );
});
