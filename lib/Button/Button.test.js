import React from 'react';
import { render } from 'react-testing-library';

import Button, { VARIANT } from './Button';

describe('Button', () => {
  it('should respect variant', () => {
    const { container: textContainer } = render(<Button variant={VARIANT.TEXT} />);
    const { container: primaryContainer } = render(<Button variant={VARIANT.PRIMARY} />);
    const { container: secondaryContainer } = render(<Button variant={VARIANT.SECONDARY} />);
    const { container: destructiveContainer } = render(<Button variant={VARIANT.DESTRUCTIVE} />);

    expect(textContainer.firstChild).toHaveClass('text');
    expect(primaryContainer.firstChild).toHaveClass('primary');
    expect(secondaryContainer.firstChild).toHaveClass('secondary');
    expect(destructiveContainer.firstChild).toHaveClass('destructive');
  });

  it('should render full width button', () => {
    const { container } = render(<Button variant={VARIANT.TEXT} fullWidth />);

    expect(container.firstChild).toHaveClass('fullWidth');
  });

  it('should render selected button', () => {
    const { container } = render(<Button variant={VARIANT.TEXT} selected />);

    expect(container.firstChild).toHaveClass('selected');
  });
});
