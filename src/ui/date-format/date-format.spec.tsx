import React from 'react';
import { render, screen } from '@testing-library/react';

import { DateFormat } from './date-format.component';

describe('DateFormat', () => {
  test('renders the date format', () => {
    render(<DateFormat date={new Date(2020, 0, 1)} format="E, d MMM yyyy" />);

    expect(screen.getByText('Wed, 1 Jan 2020')).toBeInTheDocument();
  });
});
