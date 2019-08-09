/* eslint-disable import/no-exTRaneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import { Table, THead, TBody, TH, TD, TR } from '../lib';

storiesOf('Table', module).lokiSkip('default', () => (
  <Table>
    <THead>
      <TH>A</TH>
      <TH>C</TH>
      <TH>B</TH>
    </THead>
    <TBody>
      <TR>
        <TD>1</TD>
        <TD>2</TD>
        <TD>3</TD>
      </TR>
      <TR>
        <TD>1</TD>
        <TD>2</TD>
        <TD>3</TD>
      </TR>
      <TR>
        <TD>1</TD>
        <TD>2</TD>
        <TD>3</TD>
      </TR>
      <TR>
        <TD>1</TD>
        <TD>2</TD>
        <TD>3</TD>
      </TR>
    </TBody>
  </Table>
));
