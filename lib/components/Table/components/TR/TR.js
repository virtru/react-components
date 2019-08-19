import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './TR.css';

const ENTER_KEY = 13;

const TR = ({
  className,
  children,
  onClick,
  onKeyPress,
  id,
  isCollapsed,
  blurAfterClick,
  highlightOnHover,
  isSelected, // only used for accissibility, but please set it
}) => {
  const ref = useRef(null);

  const rowClickHandler = onClick
    ? event => {
        // This gets used on key press. Enter should be treated as a click. All other key presses should not be handled.
        if (
          event.keyCode !== undefined &&
          (event.which !== ENTER_KEY && event.keyCode !== ENTER_KEY)
        ) {
          return;
        }

        if (blurAfterClick) {
          ref.current.blur();
        }

        onClick(event);

        event.preventDefault();
        event.stopPropagation();
      }
    : undefined;

  const handleKeyPress =
    rowClickHandler || onKeyPress
      ? event => {
          if (rowClickHandler) {
            rowClickHandler(event);
          }

          if (onKeyPress) {
            onKeyPress(event);
          }
        }
      : undefined;

  const classNames = cn(styles.dataRow, className, {
    [styles.collapsed]: isCollapsed,
    [styles.highlight]: onClick || highlightOnHover,
    [styles.clickable]: onClick,
  });

  const ariaRoles = cn('row', {
    switch: onClick,
  });

  return (
    <tr
      role={ariaRoles}
      aria-checked={onClick && isSelected}
      ref={ref}
      className={classNames}
      tabIndex={onClick ? '0' : undefined}
      onClick={rowClickHandler}
      onKeyPress={handleKeyPress}
      data-id={id}
    >
      {children}
    </tr>
  );
};

TR.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func,
  id: PropTypes.string,
  isCollapsed: PropTypes.bool,
  highlightOnHover: PropTypes.bool,
  blurAfterClick: PropTypes.bool,
  isSelected: PropTypes.bool,
};

TR.defaultProps = {
  className: '',
  children: null,
  onClick: undefined,
  onKeyPress: undefined,
  id: '',
  isCollapsed: false,
  blurAfterClick: false,
  highlightOnHover: false,
  isSelected: false,
};

export default TR;
