/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import Icon from './assets/icon.svg';

import { Link } from '../lib';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

const variants = Object.values(Link.VARIANT);
const defaultVariant = Link.VARIANT.NORMAL;

const printLinkTable = (size, children = 'I am a Link') => (
  <table>
    <tr>
      <th>Normal</th>
      <td>
        <Link href="/" variant={Link.VARIANT.NORMAL} size={size}>
          {children}
        </Link>
      </td>
      <td>
        <Link href="/" variant={Link.VARIANT.NORMAL} size={size} disabled>
          {children}
        </Link>
      </td>
    </tr>
    <tr style={{ backgroundColor: '#001E4A' }}>
      <th style={{ color: 'white' }}>Light</th>
      <td>
        <Link href="/" variant={Link.VARIANT.LIGHT} size={size}>
          {children}
        </Link>
      </td>
      <td>
        <Link href="/" variant={Link.VARIANT.LIGHT} size={size} disabled>
          {children}
        </Link>
      </td>
    </tr>
  </table>
);

storiesOf('Link', module)
  .lokiSkip('default', () => (
    <Container>
      <Link href="/" variant={select('Variant', variants, defaultVariant)}>
        {text('Link label', 'I am a Link')}
      </Link>
    </Container>
  ))
  .add('medium', () => printLinkTable(Link.SIZE.MEDIUM))
  .add('small', () => printLinkTable(Link.SIZE.SMALL));
