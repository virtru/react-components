import React from 'react';
import PropTypes from 'prop-types';

import styles from './Heading.css';

const SIZE = {
  XL: 'XL',
  L: 'L',
  M: 'M',
  S: 'S',
  XS: 'XS',
  XXS: 'XXS',
};

// eslint-disable-next-line no-magic-numbers
const VALID_HEADING_RANKS = [1, 2, 3, 4, 5, 6];

const sizeStyles = {
  [SIZE.XL]: styles.xlarge,
  [SIZE.L]: styles.large,
  [SIZE.M]: styles.medium,
  [SIZE.S]: styles.small,
  [SIZE.XS]: styles.xsmall,
  [SIZE.XXS]: styles.xxsmall,
};

/**
 * @param {Object} props
 * @prop {Number} rank A number from 1 to 6
 * @prop {Number} [rankOverride] A number from 1 to 6 (optional)
 * @prop {Node} children
 * @return {*}
 */
const Heading = ({ size, rank, children, ...headingProps }) => {
  const sizeStyle = sizeStyles[size];
  const HTag = `h${rank}`;

  return (
    <HTag className={sizeStyle} {...headingProps}>
      {children}
    </HTag>
  );
};

Heading.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)).isRequired,
  rank: PropTypes.oneOf(VALID_HEADING_RANKS).isRequired,
  children: PropTypes.node,
};

Heading.defaultProps = {
  children: null,
};

export default Object.assign(Heading, { SIZE });
