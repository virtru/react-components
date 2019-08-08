import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Link.css';

const VARIANT = {
  NORMAL: 'NORMAL',
  LIGHT: 'LIGHT',
};

const SIZE = {
  LARGE: 'LARGE',
  SMALL: 'SMALL',
};

const variantClasses = {
  [VARIANT.NORMAL]: styles.link,
  [VARIANT.LIGHT]: `${styles.link} ${styles.linkLight}`,
};
const sizeClasses = {
  [SIZE.LARGE]: '',
  [SIZE.SMALL]: styles.small,
};

/**
 * Renders a link
 * @param {Object} options
 * @prop {String} variant
 * @prop {String} size
 * @param ref
 * @returns {*}
 * @constructor
 */
const Link = ({ variant, size, children, ...linkProps }, ref) => {
  const classes = cn(variantClasses[variant], sizeClasses[size]);

  return (
    <a ref={ref} className={classes} {...linkProps}>
      {children}
    </a>
  );
};

Link.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)),
  size: PropTypes.oneOf(Object.values(SIZE)),
  children: PropTypes.node,
};

Link.defaultProps = {
  variant: 'NORMAL',
  size: 'LARGE',
  children: null,
};

export default Object.assign(forwardRef(Link), { VARIANT, SIZE });
