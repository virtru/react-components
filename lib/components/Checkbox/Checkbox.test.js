import React from 'react';
import { render } from '@testing-library/react';
import Checkbox, { VARIANT } from './Checkbox';

describe('Checkbox', () => {
  it('renders disabled checked checkbox', () => {
    const { container } = render(
      <Checkbox variant={VARIANT.CHECKED} disabled onChange={() => {}} />,
    );
    expect(container.querySelector('.checkboxStateChecked')).toBeInTheDocument();
    expect(container.querySelector('.checkboxDisabled')).toBeInTheDocument();
  });

  it('renders preset checkbox', () => {
    const { container } = render(<Checkbox variant={VARIANT.PRESET} onChange={() => {}} />);
    expect(container.querySelector('.checkboxStatePreset')).toBeInTheDocument();
  });

  it('renders indeterminate checkbox', () => {
    const { container } = render(<Checkbox variant={VARIANT.INDETERMINATE} onChange={() => {}} />);
    expect(container.querySelector('.checkboxStateIndeterminate')).toBeInTheDocument();
  });

  it('renders unchecked checkbox', () => {
    const { container } = render(<Checkbox variant={VARIANT.UNCHECKED} onChange={() => {}} />);
    expect(container.querySelector('.checkboxStateUnchecked')).toBeInTheDocument();
  });

  it('renders mobile checkbox with isMobileLabel class', () => {
    const { container } = render(
      <Checkbox variant={VARIANT.UNCHECKED} onChange={() => {}} isMobile />,
    );
    expect(container.querySelector('.isMobileLabel')).toBeInTheDocument();
    expect(container.querySelector('.mobileCheckboxContainer')).toBeInTheDocument();
  });

  it('should add checkboxStatePresetDisabled class on preset combined with disabled', () => {
    const { container } = render(
      <Checkbox variant={VARIANT.PRESET} onChange={() => {}} disabled />,
    );
    expect(container.querySelector('.checkboxStatePresetDisabled')).toBeInTheDocument();
  });
});
