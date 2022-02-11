import React from 'react';
import { render, screen } from '@testing-library/react';

import { DateFormat } from './date-format.component';

describe('DateFormat', () => {
  test('renders the date format', () => {
    render(
      <DateFormat date={new Date(2020, 0, 1)} dateFormat="E, d MMM yyyy" />
    );

    expect(screen.getByText('Wed, 1 Jan 2020')).toBeInTheDocument();
  });

  test('renders the date and time format', () => {
    render(
      <DateFormat
        date={new Date(2020, 0, 1)}
        dateFormat="E, d MMM yyyy"
        dateTimeFormat="E, d MMM yyy HH:mm:ss"
      />
    );

    expect(screen.getByText('Wed, 1 Jan 2020 00:00:00')).toBeInTheDocument();
  });
});
