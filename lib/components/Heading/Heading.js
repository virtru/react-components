import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Heading.css';

const VALID_HEADING_RANKS = [1, 2, 3, 4, 5, 6];

const rankStyles = {
  1: styles.headingOne,
  2: styles.headingTwo,
  3: styles.headingThree,
  4: styles.headingFour,
  5: styles.headingFive,
  6: styles.headingSix,
};

/**
 * @param {Object} props
 * @prop {Number} rank A number from 1 to 6
 * @prop {Number} [rankOverride] A number from 1 to 6 (optional)
 * @prop {Node} children
 * @return {*}
 */
const Heading = ({ rank, rankOverride, children, ...headingProps }) => {
  const rankStyle = rankStyles[rank];
  const resolvedRank = rankOverride || rank;
  const HTag = `h${resolvedRank}`;

  return (
    <HTag className={rankStyle} {...headingProps}>
      {children}
    </HTag>
  );
};

Heading.propTypes = {
  rank: PropTypes.oneOf(VALID_HEADING_RANKS).required,
  rankOverride: PropTypes.oneOf(VALID_HEADING_RANKS),
  children: PropTypes.node,
};

Heading.defaultProps = {
  rankOverride: null,
  children: null,
};

export default Heading;
