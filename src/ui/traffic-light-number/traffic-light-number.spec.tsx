import React from 'react';
import { render, screen } from '@testing-library/react';

import { TrafficLightNumber } from './traffic-light-number.component';

describe('TrafficLightNumber', () => {
  test.each([
    [20, 'text-green-600'],
    [10, 'text-yellow-400'],
    [5, 'text-red-600'],
  ])('renders the value', (value, className) => {
    const { container } = render(
      <TrafficLightNumber value={value} total={20} />
    );

    const el = screen.getByTestId('traffic-light-number');

    expect(el).toHaveTextContent(String(value));
    expect(container.getElementsByClassName(className)).toBeTruthy();
  });
});
