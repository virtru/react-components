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
const labelText = 'Input';

const ManagedTextarea = props => {
  const [value, setValue] = useState('');
  const onChange = ({ target: { value: newVal } }) => setValue(newVal);

  return <Textarea.Wrapped value={value} onChange={onChange} {...props} />;
};

// Storybook uses flex, which makes it "ignore" the 100% width on textarea. If you inspect and disable it, it strectches properly
storiesOf('Textarea', module)
  .lokiSkip('default', () => {
    const label = text('Label', 'Label');
    const message = text('Hint/Error Message');
    const error = boolean('Error', false);
    const disabled = boolean('Disabled', false);

    return <ManagedTextarea label={label} message={message} error={error} disabled={disabled} />;
  })
  .add('normal, blank, no label', () => <Textarea.Wrapped />)
  .add('normal, text, no label', () => <Textarea.Wrapped value={sampleText} />)
  .add('normal, blank, label', () => <Textarea.Wrapped label={labelText} />)
  .add('normal, text, label', () => <Textarea.Wrapped label={labelText} value={sampleText} />)
  .add('hint, blank, no label', () => <Textarea.Wrapped message={hintText} />)
  .add('hint, text, no label', () => <Textarea.Wrapped message={hintText} value={sampleText} />)
  .add('hint, blank, label', () => <Textarea.Wrapped message={hintText} label={labelText} />)
  .add('hint, text, label', () => (
    <Textarea.Wrapped message={hintText} label={labelText} value={sampleText} />
  ))
  .add('error, blank, no label', () => <Textarea.Wrapped message={errorText} error />)
  .add('error, text, no label', () => (
    <Textarea.Wrapped message={errorText} value={sampleText} error />
  ))
  .add('error, blank, label', () => (
    <Textarea.Wrapped message={errorText} label={labelText} error />
  ))
  .add('error, text, label', () => (
    <Textarea.Wrapped message={errorText} label={labelText} value={sampleText} error />
  ))
  .add('disabled, blank, no label', () => <Textarea.Wrapped disabled />)
  .add('disabled, text, no label', () => <Textarea.Wrapped disabled value={sampleText} />)
  .add('disabled, blank, label', () => <Textarea.Wrapped label={labelText} disabled />)
  .add('disabled, text, label', () => (
    <Textarea.Wrapped label={labelText} value={sampleText} disabled />
  ))
  .add('disabled + hint, blank, no label', () => <Textarea.Wrapped message={hintText} disabled />)
  .add('disabled + hint, text, no label', () => (
    <Textarea.Wrapped message={hintText} disabled value={sampleText} />
  ))
  .add('disabled + hint, blank, label', () => (
    <Textarea.Wrapped message={hintText} label={labelText} disabled />
  ))
  .add('disabled + hint, text, label', () => (
    <Textarea.Wrapped message={hintText} label={labelText} value={sampleText} disabled />
  ));
