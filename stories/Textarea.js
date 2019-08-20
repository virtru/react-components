/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Textarea } from '../lib';

const sampleText = `This is a sample
to cover this plain white field.
No lorem ipsum.`;

const hintText = 'Consider the above carefully';
const errorText = 'You did not consider the above';

const ManagedTextarea = props => {
  const [value, setValue] = useState('');
  const onChange = ({ target: { value: newVal } }) => setValue(newVal);

  return <Textarea value={value} onChange={onChange} {...props} />;
};

storiesOf('Textarea', module)
  .lokiSkip('default', () => {
    const hintMessage = text('Hint Message');
    const errorMessage = text('Error Message');
    const disabled = boolean('Disabled', false);

    return (
      <ManagedTextarea hintMessage={hintMessage} errorMessage={errorMessage} disabled={disabled} />
    );
  })
  .add('normal, blank', () => <Textarea />)
  .add('normal, text', () => <Textarea value={sampleText} />)
  .add('hint, blank', () => <Textarea hintMessage={hintText} />)
  .add('hint, text', () => <Textarea hintMessage={hintText} value={sampleText} />)
  .add('error, blank', () => <Textarea errorMessage={errorText} />)
  .add('error, text', () => <Textarea errorMessage={errorText} value={sampleText} />)
  .add('disabled, blank', () => <Textarea disabled />)
  .add('disabled, text', () => <Textarea disabled value={sampleText} />)
  .add('disabled + hint, blank', () => <Textarea hintMessage={hintText} disabled />)
  .add('disabled + hint, text', () => (
    <Textarea hintMessage={hintText} disabled value={sampleText} />
  ));
