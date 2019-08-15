/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import { Heading, Text } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => <div style={{ maxWidth: '575px' }}>{children}</div>;

const sizes = Object.values(Heading.SIZE);
const ranks = [1, 2, 3, 4, 5, 6];

storiesOf('Heading', module).lokiSkip('default', () => (
  <Container>
    <Text>Text before</Text>
    <Heading size={select('Size', sizes, Heading.SIZE.XL)} rank={select('Rank', ranks, 1)}>
      {text('Heading text', 'Heading text')}
    </Heading>
    <Text>Text after</Text>
  </Container>
));
