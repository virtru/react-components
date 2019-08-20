import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Error from './error.svg';
import styles from './Textarea.css';

const Textarea = ({
  containerClassName,
  className,
  disabled,
  errorMessage,
  hintMessage,
  value,
  onChange,
}) => {
  const containerClass = classnames(styles.container, containerClassName);
  const textareaClass = classnames(styles.textarea, className, {
    [styles.default]: !disabled && !errorMessage,
    [styles.disabled]: disabled,
    [styles.error]: !disabled && errorMessage,
  });

  const hintMessageClass = classnames(styles.message, {
    [styles.hintMessage]: !disabled,
    [styles.disabledMessage]: disabled,
  });

  let message = hintMessage ? <span className={hintMessageClass}>{hintMessage}</span> : null;

  if (!disabled && errorMessage) {
    message = (
      <span className={classnames(styles.message, styles.errorMessage)}>
        <Error /> {errorMessage}
      </span>
    );
  }

  return (
    <div className={containerClass}>
      <textarea className={textareaClass} disabled={disabled} value={value} onChange={onChange} />
      {message}
    </div>
  );
};

Textarea.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  hintMessage: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  containerClassName: undefined,
  className: undefined,
  disabled: false,
  errorMessage: undefined,
  hintMessage: undefined,
  value: undefined,
  onChange: undefined,
};

export default Textarea;
