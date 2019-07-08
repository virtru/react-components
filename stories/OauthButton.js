/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  select,
  text,
  boolean,
} from '@storybook/addon-knobs';

import { OauthButton } from '../lib';

const variants = Object.values(OauthButton.VARIANT);
const [defaultVariant] = variants;

storiesOf('OauthButton', module).add('default', () => (
  <OauthButton
    variant={select('Variant', variants, defaultVariant)}
    disabled={boolean('Is disabled', false)}
    fullWidth={boolean('Use full width', false)}
  >
    {text('Inner text', 'Sign in with Google')}
  </OauthButton>
));
