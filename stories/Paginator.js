/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import { Paginator } from '../lib';

storiesOf('Paginator', module)
  .lokiSkip('default', () => (
    <Paginator
      min={number('Minimum items', 1)}
      total={number('Total items', 89)}
      start={number('Items start', 1)}
      end={number('Items end', 25)}
    >
      {text('Text', '1 - 25  of  89')}
    </Paginator>
  ))
  .add('without text', () => <Paginator min={1} total={10} start={2} end={3} />)
  .add('left disabled', () => (
    <Paginator min={1} total={10} start={1} end={3}>
      Test
    </Paginator>
  ))
  .add('right disabled', () => (
    <Paginator min={1} total={10} start={5} end={10}>
      Test
    </Paginator>
  ))
  .add('both disabled', () => (
    <Paginator min={1} total={10} start={1} end={10}>
      Test
    </Paginator>
  ));
