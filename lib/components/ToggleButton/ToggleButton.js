import React from 'react';
import ReactToggle from 'react-toggle';

import './ToggleButton.css';

/**
 * Renders toggle button
 * @param props
 * @returns {*}
 */
const ToggleButton = ({ label, ...toggleProps }) => <ReactToggle {...toggleProps} icons={label} />;

ToggleButton.propTypes = {
  ...ReactToggle.propTypes,
  label: ReactToggle.propTypes.icons,
};

ToggleButton.defaultProps = ReactToggle.defaultProps;

export default ToggleButton;
