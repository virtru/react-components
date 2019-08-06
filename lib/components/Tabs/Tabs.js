import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs as TabsContainer, TabList, TabPanel } from 'react-tabs';

import './Tabs.css';

const VARIANT = {
  SMALL: 'SMALL',
  LARGE: 'LARGE',
};

const Tabs = ({ variant, children, ...tabsProps }) => {
  return <TabsContainer {...tabsProps}>{children}</TabsContainer>;
};

Tabs.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  children: PropTypes.node.isRequired,
};

export default Object.assign(Tabs, { VARIANT });
export { Tab, TabList, TabPanel };
