/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { text, boolean } from '@storybook/addon-knobs';

import { Encrypting, Decrypting } from '../lib';

const wrapperCss = {
  background: '#fff',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '50px',
};

storiesOf('Spinner', module)
  .add('Encrypting', () => (
    <div style={wrapperCss}>
      <Encrypting
        step={boolean('done', false) ? 'done' : 'loading'}
        onComplete={() => {}}
        title={text('Title', 'Encrypting')}
      />
    </div>
  ))
  .add('Decrypting', () => (
    <div style={wrapperCss}>
      <Decrypting
        step={boolean('done', false) ? 'done' : 'loading'}
        onComplete={() => {}}
        title={text('Title', 'Decrypting')}
      />
    </div>
  ));
