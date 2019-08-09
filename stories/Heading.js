/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import { Heading } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px' }}>{children}</div>
);

const ranks = [1, 2, 3, 4, 5, 6];
const rankOverrides = [null].concat(ranks);

storiesOf('Heading', module)
  .lokiSkip('default', () => (
    <Container>
      Text before
      <Heading
        rank={select('Rank', ranks, 1)}
        rankOverride={select('Rank Override', rankOverrides, null)}
      >
        {text('Heading text', 'Heading text')}
      </Heading>
      Text after
    </Container>
  ));
