import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './components/Arrow/Arrow';

import styles from './Paginator.css';

const Paginator = ({ start, end, total, min, children }) => (
  <div className={styles.paginator}>
    {children && <div className={styles.children}>{children}</div>}
    <div className={styles.arrows}>
      <Arrow variant={Arrow.VARIANT.LEFT} disabled={start <= min} />
      <Arrow variant={Arrow.VARIANT.RIGHT} disabled={end >= total} />
    </div>
  </div>
);

Paginator.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  min: PropTypes.number,
  children: PropTypes.node,
};

Paginator.defaultProps = {
  min: 1,
  children: null,
};

export default Paginator;
