/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';

import { boolean, select } from '@storybook/addon-knobs';
import { Checkbox } from '../lib';

const variants = Object.values(Checkbox.VARIANT);
const [defaultVariant] = variants;
const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);
const printCheckboxTable = (variant) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    ref.current.focus();
  }, [ref]);

  return (
    <table>
      <tbody>
        <tr>
          <th>Enabled</th>
          <td>
            <Checkbox
              variant={variant}
            />
          </td>
        </tr>
        <tr>
          <th>Disabled</th>
          <td>
            <Checkbox
              variant={variant}
              disabled
            />
          </td>
        </tr>
        <tr>
          <th>Hover/Focus</th>
          <td>
            <Checkbox
              variant={variant}
              ref={ref}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

storiesOf('Checkbox', module)
  .lokiSkip('default', () => (
    <Container>
      <Checkbox
        disabled={boolean('Disabled', false)}
        variant={select('Variant', variants, defaultVariant)}
        onChange={() => {}}
      />
    </Container>
  ))
  .add('unchecked', () => printCheckboxTable(Checkbox.VARIANT.UNCHECKED))
  .add('checked', () => printCheckboxTable(Checkbox.VARIANT.CHECKED))
  .add('indeterminate', () => printCheckboxTable(Checkbox.VARIANT.INDETERMINATE))
  .add('preset', () => printCheckboxTable(Checkbox.VARIANT.PRESET));
