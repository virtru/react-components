import React, {
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';

import usePortal from '../../helpers/usePortal';

import styles from './Tooltip.css';


export const TOOLTIP_POSITION = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

export const TOOLTIP_ARROW_POSITION = {
  START: 'start',
  MIDDLE: 'middle',
  END: 'end',
};

const reversePosition = {
  [TOOLTIP_POSITION.TOP]: TOOLTIP_POSITION.BOTTOM,
  [TOOLTIP_POSITION.RIGHT]: TOOLTIP_POSITION.LEFT,
  [TOOLTIP_POSITION.BOTTOM]: TOOLTIP_POSITION.TOP,
  [TOOLTIP_POSITION.LEFT]: TOOLTIP_POSITION.RIGHT,
};

const Tooltip = forwardRef(function Tooltip({ overlay, position, arrowPosition }, ref) {
  return (
    <div className={styles[`container-${position}-${arrowPosition}`]} ref={ref}>
      <div className={styles[`arrow-${reversePosition[position]}-${arrowPosition}`]} />
      {overlay}
    </div>
  );
});

Tooltip.propTypes = {
  overlay: PropTypes.node,
  position: PropTypes.oneOf(Object.values(TOOLTIP_POSITION)).isRequired,
  arrowPosition: PropTypes.oneOf(Object.values(TOOLTIP_ARROW_POSITION)),
};

Tooltip.defaultProps = {
  overlay: null,
  arrowPosition: TOOLTIP_ARROW_POSITION.MIDDLE,
};

const TooltipWrapper = ({
  children,
  ...tooltipProps
}) => {
  const childrenRef = useRef(null);
  const tooltipRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    if (isVisible) {
      const rect = childrenRef.current.getBoundingClientRect();
      let { top, left } = rect;

      const isHorizontal = [
        TOOLTIP_POSITION.LEFT,
        TOOLTIP_POSITION.RIGHT,
      ].includes(tooltipProps.position);

      if (isHorizontal) {
        top += Math.ceil(rect.height / 2);

        if (tooltipProps.position === TOOLTIP_POSITION.RIGHT) {
          left += rect.width;
        }
      } else {
        if (tooltipProps.arrowPosition === TOOLTIP_ARROW_POSITION.MIDDLE) {
          left += Math.ceil(rect.width / 2);
        } else if (tooltipProps.arrowPosition === TOOLTIP_ARROW_POSITION.END) {
          left += rect.width;
        }

        if (tooltipProps.position === TOOLTIP_POSITION.BOTTOM) {
          top += rect.height;
        }
      }

      tooltipRef.current.style.cssText = `
        top: ${top}px;
        left: ${left}px;
      `;
    }
  }, [
    isVisible,
    childrenRef,
    tooltipRef,
    tooltipProps.position,
    tooltipProps.arrowPosition,
  ]);


  const { props: childrenProps } = children;
  const extendedChildrenProps = {
    ...childrenProps,
    onMouseEnter(event) {
      if (childrenProps.onMouseEnter) {
        childrenProps.onMouseEnter(event);
      }

      setIsVisible(true);
    },

    onMouseLeave(event) {
      if (childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      setIsVisible(false);
    },
  };

  return [
    cloneElement(children, { ref: childrenRef, ...extendedChildrenProps }),
    usePortal(isVisible && <Tooltip {...tooltipProps} ref={tooltipRef} />),
  ];
};


export { TooltipWrapper as Tooltip };
