import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ErrorIcon from './assets/error-icon.svg';
import InfoIcon from './assets/info-icon.svg';
import styles from './Input.css';

const isValidMessage = state => typeof state === 'string' && state.length > 0;

/**
 * Renders input with error or info text
 * @param error
 * @param info
 * @param inputProps
 * @returns {*}
 * @constructor
 */
const Input = ({ error, info, ...inputProps }) => {
  const hasErrorMessage = isValidMessage(error);
  const hasInfoMessage = isValidMessage(info);

  return (
    <span className={styles.container}>
      <input {...inputProps} className={cn(styles.input, { [styles.error]: error })} type="text" />
      {(hasErrorMessage || hasInfoMessage) && (
        <span className={cn(styles.text, { [styles.error]: hasErrorMessage })}>
          <span className={styles.icon}>{hasErrorMessage ? <ErrorIcon /> : <InfoIcon />}</span>
          <span className={styles.description}>{hasErrorMessage ? error : info}</span>
        </span>
      )}
    </span>
  );
};

Input.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  info: PropTypes.string,
};

Input.defaultProps = {
  error: false,
  info: '',
};

export default Input;
