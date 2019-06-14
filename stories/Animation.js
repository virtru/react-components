import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  text,
  boolean,
} from '@storybook/addon-knobs';

import Encrypting from '../lib/Animation/Encrypting';
import Decrypting from '../lib/Animation/Decrypting';

const wrapperCss = { background: '#fff', display: 'flex', justifyContent: 'space-around', padding: '50px' };

storiesOf('Animation', module)
  .add('Encrypting', () => (
    <div style={wrapperCss}>
      <Encrypting
        step={boolean('loading', true) ? 'loading' : 'done'}
        onComplete={() => {}}
        title={text('Title', 'Encrypting')}
      />
    </div>
  ))
  .add('Decrypting', () => (
    <div style={wrapperCss}>
      <Decrypting
        step={boolean('loading', true) ? 'loading' : 'done'}
        onComplete={() => {}}
        title={text('Title', 'Decrypting')}
      />
    </div>
  ));
