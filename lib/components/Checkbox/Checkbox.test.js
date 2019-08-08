import Checkbox, { VARIANT } from './Checkbox';

describe('Checkbox', () => {
  it('renders disabled checked checkbox', () => {
    const component = <Checkbox variant={VARIANT.CHECKED} disabled onChange={() => {}} />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchElement(component);
  });

  it('renders preset checkbox', () => {
    const component = <Checkbox variant={VARIANT.PRESET} onChange={() => {}} />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchElement(component);
  });

  it('renders indeterminate checkbox', () => {
    const component = <Checkbox variant={VARIANT.INDETERMINATE} onChange={() => {}} />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchElement(component);
  });

  it('renders unchecked checkbox', () => {
    const component = <Checkbox variant={VARIANT.UNCHECKED} onChange={() => {}} />;
    const wrapper = shallow(component);
    expect(wrapper).toMatchElement(component);
  });

  it('renders mobile checkbox with isMobileLabel class', () => {
    const component = <Checkbox variant={VARIANT.UNCHECKED} onChange={() => {}} isMobile />;
    const wrapper = shallow(component);
    expect(wrapper.find('.isMobileLabel').exists()).toEqual(true);
    expect(wrapper.find('.mobileCheckboxContainer').exists()).toEqual(true);
  });

  it('should add checkboxStatePresetDisabled class on preset combined with disabled', () => {
    const component = <Checkbox variant={VARIANT.PRESET} onChange={() => {}} disabled />;
    const wrapper = shallow(component);
    expect(wrapper.find('.checkboxStatePresetDisabled').exists()).toEqual(true);
  });
});
