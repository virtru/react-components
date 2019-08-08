/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, radios, text } from '@storybook/addon-knobs';
import Checkbox, { VARIANT } from '../lib/components/Checkbox/Checkbox';

const variants = Object.values(VARIANT);
const [defaultVariant] = variants;

storiesOf('Checkbox', module).add('default', () => (
  <div style={{ textAlign: 'center' }}>
    <Checkbox
      isMobile={boolean('isMobile', false)}
      disabled={boolean('disabled', false)}
      variant={radios('variant', variants, defaultVariant)}
      name={text('name', 'checkbox')}
      onChange={() => {}}
    />
  </div>
));
