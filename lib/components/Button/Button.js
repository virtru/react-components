import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Button.css';

const VARIANT = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  NO_OUTLINE: 'NO_OUTLINE',
  NUMERICAL: 'NUMERICAL',
};

const SIZE = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
  ICON: 'ICON',
};

/**
 * Renders button
 * @param ref
 * @returns {*}
 * @constructor
 */
const Button = ({
    variant,
    size,
    fullWidth,
    type,
    children,
    ...buttonProps,
  }, ref) => {
  const variantClass = {
    [VARIANT.PRIMARY]: styles.primary,
    [VARIANT.SECONDARY]: styles.secondary,
    [VARIANT.NO_OUTLINE]: styles.noOutline,
    [VARIANT.NUMERICAL]: styles.numerical,
  }[variant];
  const sizeClass = {
    [SIZE.LARGE]: styles.large,
    [SIZE.MEDIUM]: styles.medium,
    [SIZE.SMALL]: styles.small,
    [SIZE.ICON]: styles.icon,
  }[size];

  const buttonClasses = cn(variantClass, sizeClass, {
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button
      type={type}
      ref={ref}
      className={buttonClasses}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  fullWidth: false,
  children: null,
};

export default Object.assign(forwardRef(Button), { VARIANT, SIZE });
