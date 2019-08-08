import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import styles from './Checkbox.css';

export const VARIANT = {
  UNCHECKED: 'unchecked',
  CHECKED: 'checked',
  INDETERMINATE: 'indeterminate',
  PRESET: 'preset',
};

/**
 * Returns array of checkbox class names
 * @param variant
 * @param disabled
 * @param isMobile
 * @returns {Array}
 */
function getCheckboxClassNames({ variant, disabled, isMobile }) {
  const classNames = [styles.checkboxState];

  switch (variant) {
    case VARIANT.INDETERMINATE:
      classNames.push(styles.checkboxStateIndeterminate);
      break;
    case VARIANT.CHECKED:
      classNames.push(styles.checkboxStateChecked);
      break;
    case VARIANT.PRESET:
      // eslint-disable-next-line no-unused-expressions
      disabled
        ? classNames.push(styles.checkboxStatePresetDisabled)
        : classNames.push(styles.checkboxStatePreset);
      break;
    default:
      classNames.push(styles.checkboxStateUnchecked);
  }

  if (disabled) {
    classNames.push(styles.checkboxDisabled);
  }

  if (isMobile) {
    classNames.push(styles.mobileCheckboxState);
  }

  return classNames;
}

/**
 * Checkbox component
 * @param disabled
 * @param variant
 * @param isMobile
 * @param props
 * @returns {*}
 * @constructor
 */
function Checkbox({ variant, disabled, isMobile, ...props }) {
  const inputID = useMemo(() => uniqid(), []);
  const classNames = getCheckboxClassNames({ variant, disabled, isMobile });

  return (
    <label htmlFor={inputID} className={isMobile ? styles.isMobileLabel : ''}>
      <div
        className={[isMobile ? styles.mobileCheckboxContainer : styles.checkboxContainer].join(' ')}
      >
        <input
          id={inputID}
          type="checkbox"
          disabled={disabled}
          checked={variant === VARIANT.CHECKED}
          className={styles.checkboxInput}
          {...props}
        />
        <div className={classNames.join(' ')} />
      </div>
    </label>
  );
}

Checkbox.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  disabled: PropTypes.bool,
  isMobile: PropTypes.bool,
};

Checkbox.defaultProps = {
  disabled: false,
  isMobile: false,
};

export default Object.assign(forwardRef(Checkbox), { VARIANT });
