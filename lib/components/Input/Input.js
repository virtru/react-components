import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ErrorIcon from './assets/error-icon.svg';
import InfoIcon from './assets/info-icon.svg';
import styles from './Input.css';

/**
 * Renders input with error or info text
 * @param error
 * @param info
 * @param inputProps
 * @returns {*}
 * @constructor
 */
function Input({ error, info, ...inputProps }) {
  const containerClassname = cn(styles.container, { [styles.error]: error });

  const hasError = typeof error === 'string' && error.length > 0;
  const hasInfo = String(info).length > 0;

  return (
    <span className={containerClassname}>
      <input {...inputProps} className={styles.input} />
      {(hasError || hasInfo) && (
        <span className={styles.text}>
          <span className={styles.icon}>{error ? <ErrorIcon /> : <InfoIcon />}</span>
          <span className={styles.description}>{error || info}</span>
        </span>
      )}
    </span>
  );
}

Input.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  info: PropTypes.string,
};

Input.defaultProps = {
  error: false,
  info: '',
};

export default Input;
