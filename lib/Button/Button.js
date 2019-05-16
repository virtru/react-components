import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

/**
 * Enum for button variants
 * @enum {VARIANT}
 */
const VARIANT = {
  TEXT: 'text',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DESTRUCTIVE: 'destructive',
};

/**
 * Renders button with predefined styles
 * @param variant - button style
 * @param selected - defines selected state
 * @param fullWidth - defines if button should grow to 100% width
 * @param children
 * @param props
 * @returns {*}
 * @constructor
 */
const Button = ({ variant, selected, fullWidth, children, ...props }) => {
  const classNames = [
    styles[variant],
    selected ? styles.selected : null,
    fullWidth ? styles.fullWidth : null,
  ].join(' ');

  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  selected: PropTypes.bool,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  selected: false,
  fullWidth: false,
  children: null,
};

Button.VARIANT = VARIANT;

export default Button;
