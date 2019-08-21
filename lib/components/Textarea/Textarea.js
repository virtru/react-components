import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import ErrorIcon from './error.svg';
import styles from './Textarea.css';

const Textarea = ({ containerClassName, className, disabled, error, message, value, onChange }) => {
  const containerClass = classnames(styles.container, containerClassName);
  const textareaClass = classnames(styles.textarea, className, {
    [styles.default]: !disabled && !error,
    [styles.disabled]: disabled,
    [styles.error]: !disabled && error,
  });

  const hintMessageClass = classnames(styles.message, {
    [styles.hintMessage]: !disabled && !error,
    [styles.disabledMessage]: disabled,
    [styles.errorMessage]: !disabled && error,
  });

  return (
    <div className={containerClass}>
      <textarea className={textareaClass} disabled={disabled} value={value} onChange={onChange} />
      {message && (
        <span className={hintMessageClass}>
          {error && <ErrorIcon />} {message}
        </span>
      )}
    </div>
  );
};

Textarea.propTypes = {
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  message: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  containerClassName: undefined,
  className: undefined,
  disabled: false,
  error: false,
  message: undefined,
  value: undefined,
  onChange: undefined,
};

export default Textarea;
