/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';

import { Heading, Text } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => <div style={{ maxWidth: '575px' }}>{children}</div>;

const sizes = Object.values(Heading.SIZE);
const ranks = [1, 2, 3, 4, 5, 6];
const colors = ['black', 'red', 'blue', 'green'];

const printHeadingExample = (size, rank, color, nospace = false) => (
  <Container>
    <Text>Text before</Text>
    <Heading size={size} rank={rank} color={color} nospace={nospace}>
      Heading text
    </Heading>
    <Text>Text after</Text>
  </Container>
);

storiesOf('Heading', module)
  .lokiSkip('default', () => (
    <Container>
      <Text>Text before</Text>
      <Heading
        size={select('Size', sizes, Heading.SIZE.XLARGE)}
        rank={select('Rank', ranks, 1)}
        color={select('Color', colors, 'black')}
        nospace={!boolean('Add spacing', true)}
      >
        {text('Heading text', 'Heading text')}
      </Heading>
      <Text>Text after</Text>
    </Container>
  ))
  .add('xlarge', () => printHeadingExample(Heading.SIZE.XLARGE, 1))
  .add('large', () => printHeadingExample(Heading.SIZE.LARGE, 2))
  .add('medium', () => printHeadingExample(Heading.SIZE.MEDIUM, 3))
  .add('small', () => printHeadingExample(Heading.SIZE.SMALL, 4))
  .add('xsmall', () => printHeadingExample(Heading.SIZE.XSMALL, 5))
  .add('xxsmall', () => printHeadingExample(Heading.SIZE.XXSMALL, 6))
  .add('colored', () => printHeadingExample(Heading.SIZE.MEDIUM, 3, 'red'))
  .add('nospace', () => printHeadingExample(Heading.SIZE.MEDIUM, 3, undefined, true));
