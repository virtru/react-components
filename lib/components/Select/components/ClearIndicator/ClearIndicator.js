import React from 'react';
import { components as ReactSelectComponent } from 'react-select';

import Cross from '../Cross/Cross';

const ClearIndicator = props => (
  <ReactSelectComponent.ClearIndicator {...props}>
    <Cross variant={Cross.VARIANT.LARGE} color="black" />
  </ReactSelectComponent.ClearIndicator>
);

ClearIndicator.propTypes = ReactSelectComponent.ClearIndicator.propTypes;
ClearIndicator.defaultProps = ReactSelectComponent.ClearIndicator.defaultProps;

export default ClearIndicator;
