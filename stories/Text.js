/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import { Text } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '575px' }}>{children}</div>
);

storiesOf('Text', module)
  .lokiSkip('default', () => (
    <Container>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac nunc ut lacus commodo efficitur. Sed ultrices eu enim in auctor. Nullam consectetur augue vitae metus ornare finibus. Sed blandit risus dignissim lacinia placerat. Nullam et risus porttitor nibh iaculis dignissim et quis elit.
      </Text>
    </Container>
  ));
