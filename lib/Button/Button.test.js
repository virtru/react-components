import React from 'react';
import { render } from 'react-testing-library';

import Button from './Button';

describe('Button', () => {
  it('should respect variant', () => {
    const { container: textContainer } = render(<Button variant={Button.VARIANT.TEXT} />);
    const { container: primaryContainer } = render(<Button variant={Button.VARIANT.PRIMARY} />);
    const { container: secondaryContainer } = render(<Button variant={Button.VARIANT.SECONDARY} />);
    const { container: destructiveContainer } = render(<Button variant={Button.VARIANT.DESTRUCTIVE} />);

    expect(textContainer.firstChild).toHaveClass('text');
    expect(primaryContainer.firstChild).toHaveClass('primary');
    expect(secondaryContainer.firstChild).toHaveClass('secondary');
    expect(destructiveContainer.firstChild).toHaveClass('destructive');
  });

  it('should render full width button', () => {
    const { container } = render(<Button variant={Button.VARIANT.TEXT} fullWidth />);

    expect(container.firstChild).toHaveClass('fullWidth');
  });

  it('should render selected button', () => {
    const { container } = render(<Button variant={Button.VARIANT.TEXT} selected />);

    expect(container.firstChild).toHaveClass('selected');
  });
});
