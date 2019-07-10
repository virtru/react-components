import React from 'react';
import ReactSelect from 'react-select';

import DropdownIndicator from './components/DropdownIndicator/DropdownIndicator';
import IndicatorSeparator from './components/IndicatorSeparator/IndicatorSeparator';
import styles from './Select.css';
import jsStyles from './Select.css.js';

const Select = props => (
  <ReactSelect
    isSearchable={false}
    {...props}
    className={styles.container}
    classNamePrefix="select"
    styles={jsStyles}
    components={{
      DropdownIndicator,
      IndicatorSeparator,
    }}
  />
);

export default Select;
