import React from 'react';
import { components as ReactSelectComponent } from 'react-select';
import cn from 'classnames';

import styles from './DropdownIndicator.css';

// TODO: replace it with custom chevron
// TODO: Fill with blue on hover
const DropdownIndicator = props => {
  const {
    selectProps: { menuIsOpen },
  } = props;

  return (
    <ReactSelectComponent.DropdownIndicator {...props}>
      <div className={cn(styles.chevron, { [styles.inverted]: menuIsOpen })}>
        <ReactSelectComponent.DownChevron />
      </div>
    </ReactSelectComponent.DropdownIndicator>
  );
};

DropdownIndicator.propTypes = ReactSelectComponent.DropdownIndicator.propTypes;
DropdownIndicator.defaultProps = ReactSelectComponent.DropdownIndicator.defaultProps;

export default DropdownIndicator;
