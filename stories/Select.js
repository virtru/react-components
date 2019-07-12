/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef, useLayoutEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';

import { Select } from '../lib';

const generateOptions = count =>
  Array.from({ length: count }).map((_, index) => ({
    label: `Option ${index + 1}`,
    value: index,
  }));

const Container = ({ children }) => (
  <div style={{ maxWidth: '400px', display: 'flex', flexGrow: 1 }}>{children}</div>
);

storiesOf('Select', module)
  .lokiSkip('default', () => {
    const optionsCount = number('Number of options', 5);
    const optionPrefix = text('Option prefix', 'Menu Option');
    const isShowIndex = boolean('Show option index', true);

    return (
      <Container>
        <Select
          placeholder={text('Placeholder', 'Select an Option')}
          options={Array.from({ length: optionsCount }).map((_, index) => ({
            label: `${optionPrefix} ${isShowIndex ? index + 1 : ''}`.trim(),
            value: index,
          }))}
          isDisabled={boolean('Is disabled', false)}
        />
      </Container>
    );
  })
  .add('hover/focus', () => (
    <Container>
      <Select autoFocus placeholder="Select an Option" />
    </Container>
  ))
  .add('open with focused option', () => {
    const selectRef = useRef(null);

    useLayoutEffect(() => {
      selectRef.current.select.openMenu('first');
    }, [selectRef]);

    return (
      <Container>
        <Select
          ref={selectRef}
          placeholder="Select an Option"
          options={generateOptions(3)}
        />
      </Container>
    );
  })
  .add('first option selected', () => {
    const options = generateOptions(3);
    const [selectedOption] = options;

    return (
      <Container>
        <Select placeholder="Select an Option" options={options} value={selectedOption} />
      </Container>
    );
  })
  .add('disabled', () => (
    <Container>
      <Select autoFocus placeholder="Select an Option" isDisabled />
    </Container>
  ));
