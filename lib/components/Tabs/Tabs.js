import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs as TabsContainer, TabList, TabPanel } from 'react-tabs';

import styles from './Tabs.css';

const VARIANT = {
  SMALL: 'SMALL',
  LARGE: 'LARGE',
};

const Tabs = ({ variant, children, ...tabsProps }) => {
  return (
    <div className={styles.container}>
      <TabsContainer {...tabsProps}>{children}</TabsContainer>
    </div>
  );
};

Tabs.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Object.assign(Tabs, { VARIANT });
export { Tab, TabList, TabPanel };
