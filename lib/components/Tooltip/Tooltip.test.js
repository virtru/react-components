import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('should render children and react to mouse events', async () => {
    const overlay = "I'm a firestarter, twisted firestarter";
    const containerText = "You're a firestarter, twisted firestarter";
    const pointerEnterMock = jest.fn();
    const pointerLeaveMock = jest.fn();

    const wrapper = render(
      <Tooltip
        position={Tooltip.POSITION.TOP}
        arrowPosition={Tooltip.ARROW_POSITION.MIDDLE}
        overlay={overlay}
      >
        <div onPointerOver={pointerEnterMock} onPointerLeave={pointerLeaveMock}>
          {containerText}
        </div>
      </Tooltip>,
    );

    const [container, tooltip] = await Promise.all([
      wrapper.findByText(containerText),
      wrapper.queryAllByText(overlay),
    ]);

    expect(container).toBeInTheDocument();
    expect(tooltip).toHaveLength(0);

    fireEvent.pointerOver(container);
    expect(await wrapper.findByText(overlay)).toBeInTheDocument();

    fireEvent.pointerOut(container);
    expect(await wrapper.queryAllByText(overlay)).toHaveLength(0);

    expect(pointerEnterMock).toHaveBeenCalledTimes(1);
    expect(pointerLeaveMock).toHaveBeenCalledTimes(1);
  });
});
