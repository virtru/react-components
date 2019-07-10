import React from 'react';
import ReactSelect from 'react-select';

import DropdownIndicator from './components/DropdownIndicator/DropdownIndicator';
import IndicatorSeparator from './components/IndicatorSeparator/IndicatorSeparator';
import styles from './Select.css';

const hexToRgb = hex =>
  /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
    .exec(hex)
    .slice(1)
    .map(v => parseInt(v, 16))
    .join(', ');

const rgba = (hex, opacity) => `rgba(${hexToRgb(hex)}, ${opacity})`;

const customStyles = {
  placeholder: provided => ({
    ...provided,
    fontFamily: `'Open Sans', Helvetica, Arial, sans-serif`,
    fontSize: '1.3rem',
    color: 'inherit',
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '3px',
    marginTop: '-1px',
    borderTopRightRadius: '0',
    borderTopLeftRadius: '0',
    boxShadow: `0 1px 4px 1px ${rgba('#174eb6', '0.3')}`,
    border: '1px solid #001e4a',
    borderTop: 'none',
    overflow: 'hidden',
  }),
  control: (provided, { selectProps: { menuIsOpen } }) => {
    const hoverStyles = {
      borderColor: '#001e4a',
      boxShadow: `0 1px 4px 1px ${rgba('#174eb6', '0.3')}`,
      color: '#174eb6',
    };

    const openStyles = {
      ...hoverStyles,
      borderRadius: '3px 3px 0 0',
      borderBottomColor: 'transparent !important',
    };

    const regularStyles = {
      boxShadow: 'none',
      border: '1px solid #515864',
      borderRadius: '3px',
      color: '#2d323b',
    };

    return {
      ...provided,
      ...(menuIsOpen ? openStyles : regularStyles),
      '&:hover': hoverStyles,
    };
  },
  menuList: provided => ({
    ...provided,
    padding: 0,
  }),
  option: provided => ({
    ...provided,
    fontFamily: `'Open Sans', Helvetica, Arial, sans-serif`,
    fontSize: '1.3rem',
    '&:hover': {
      backgroundColor: '#f3f5f7',
      color: '#174eb6',
      padding: ''
    },
  }),
};

const Select = props => (
  <ReactSelect
    {...props}
    className={styles.container}
    classNamePrefix="select"
    styles={customStyles}
    menuIsOpen
    components={{
      DropdownIndicator,
      IndicatorSeparator,
    }}
  />
);

export default Select;
