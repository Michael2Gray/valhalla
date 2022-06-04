import React from 'react';
import { render, screen } from '@testing-library/react';

import { WeatherIcon } from './weather-icon.component';
import { WEATHER_TEST_DATA } from './weather-icon.util';

describe('WeatherIcon', () => {
  test.each(WEATHER_TEST_DATA)(
    'the correct weather icon is rendered for %p',
    (weather) => {
      render(<WeatherIcon weather={weather} />);

      expect(
        screen.getByRole('img', { name: `Weather ${weather}` })
      ).toBeInTheDocument();
    }
  );
});
