/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, boolean } from '@storybook/addon-knobs';

import { Encrypting, Decrypting } from '../lib';

storiesOf('Spinner', module)
  .add('Encrypting', () => (
    <Encrypting
      step={boolean('done', false) ? 'done' : 'loading'}
      onComplete={() => {}}
      title={text('Title', 'Encrypting')}
    />
  ))
  .add('Decrypting', () => (
    <Decrypting
      step={boolean('done', false) ? 'done' : 'loading'}
      onComplete={() => {}}
      title={text('Title', 'Decrypting')}
    />
  ));
