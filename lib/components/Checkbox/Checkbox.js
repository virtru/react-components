import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

import styles from './Checkbox.css';

export const VARIANT = {
  UNCHECKED: 'UNCHECKED',
  CHECKED: 'CHECKED',
  INDETERMINATE: 'INDETERMINATE',
  PRESET: 'PRESET',
};

const variantStyleMap = {
  [VARIANT.INDETERMINATE]: styles.checkboxStateIndeterminate,
  [VARIANT.CHECKED]: styles.checkboxStateChecked,
  [VARIANT.PRESET]: styles.checkboxStatePreset,
  [VARIANT.UNCHECKED]: styles.checkboxStateUnchecked,
};

const base36 = 36;
const afterDecimalIndex = 2;
const generateId = () =>
  Math.random()
    .toString(base36)
    .substr(afterDecimalIndex);

/**
 * Checkbox component
 * @param disabled
 * @param variant
 * @param id
 * @param onChange
 * @param props
 * @returns {*}
 * @constructor
 */
const Checkbox = forwardRef(({ variant, disabled, id, onChange, ...props }, ref) => {
  const inputID = useMemo(() => id || generateId(), [id]);
  const visualClassNames = classes(styles.checkboxState, variantStyleMap[variant], {
    [styles.disabled]: disabled,
  });

  return (
    <label ref={ref} htmlFor={inputID} className={styles.label}>
      <div className={styles.checkboxContainer}>
        <input
          id={inputID}
          type="checkbox"
          disabled={disabled}
          checked={variant === VARIANT.CHECKED}
          className={styles.checkboxInput}
          onChange={onChange}
          {...props}
        />
        <div className={visualClassNames} />
      </div>
    </label>
  );
});

Checkbox.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANT)).isRequired,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  disabled: false,
  id: undefined,
  onChange: undefined,
};

export default Object.assign(Checkbox, { VARIANT });
