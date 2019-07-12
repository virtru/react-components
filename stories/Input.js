/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import { Input } from '../lib';

const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: '1' }}>{children}</div>
);

storiesOf('Input', module)
  .lokiSkip('default', () => {
    const errorTypes = ['boolean', 'string'];
    const [defaultErrorType] = errorTypes;

    const errorType = select('Error type', errorTypes, defaultErrorType);

    return (
      <Container>
        <Input
          error={errorType === 'boolean' ? boolean('Has error', false) : text('Error message', '')}
          info={text('Info message', '')}
          value={text('Input value', 'Type here')}
          disabled={boolean('Is disabled', false)}
        />
      </Container>
    );
  })
  .add('empty', () => (
    <Container>
      <Input />
    </Container>
  ))
  .add('focus', () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
      ref.current.focus();
    }, [ref]);

    return (
      <Container>
        <Input ref={ref} />
      </Container>
    );
  })
  .add('focus', () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
      ref.current.focus();
    }, [ref]);

    return (
      <Container>
        <Input ref={ref} value="Value" />
      </Container>
    );
  })
  .add('error', () => (
    <Container>
      <Input error />
    </Container>
  ))
  .add('error focus', () => {
    const ref = useRef(null);

    useLayoutEffect(() => {
      ref.current.focus();
    }, [ref]);

    return (
      <Container>
        <Input ref={ref} value="Value" error />
      </Container>
    );
  })
  .add('error with message', () => (
    <Container>
      <Input error="And this is an explanation" />
    </Container>
  ))
  .add('info with message', () => (
    <Container>
      <Input info="Helpful hint text…" />
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      <Input value="Value" disabled />
    </Container>
  ));
