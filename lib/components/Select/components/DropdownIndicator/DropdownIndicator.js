import React from 'react';
import { components as ReactSelectComponent } from 'react-select';
import cn from 'classnames';

import styles from './DropdownIndicator.css';

const DropdownIndicator = props => (
  <ReactSelectComponent.DropdownIndicator {...props}>
    <div className={cn(styles.chevron, { [styles.inverted]: props.selectProps.menuIsOpen })}>
      {/* TODO: replace it with custom chevron */}
      <ReactSelectComponent.DownChevron />
    </div>
  </ReactSelectComponent.DropdownIndicator>
);

export default DropdownIndicator;
