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
    const message = text('Hint/Error Message');
    const error = boolean('Error', false);
    const disabled = boolean('Disabled', false);

    return <ManagedTextarea message={message} error={error} disabled={disabled} />;
  })
  .add('normal, blank', () => <Textarea />)
  .add('normal, text', () => <Textarea value={sampleText} />)
  .add('hint, blank', () => <Textarea message={hintText} />)
  .add('hint, text', () => <Textarea message={hintText} value={sampleText} />)
  .add('error, blank', () => <Textarea message={errorText} error />)
  .add('error, text', () => <Textarea message={errorText} value={sampleText} error />)
  .add('disabled, blank', () => <Textarea disabled />)
  .add('disabled, text', () => <Textarea disabled value={sampleText} />)
  .add('disabled + hint, blank', () => <Textarea message={hintText} disabled />)
  .add('disabled + hint, text', () => <Textarea message={hintText} disabled value={sampleText} />);
