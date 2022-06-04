import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { WeatherIcon } from './weather-icon.component';
import { WEATHER_TEST_DATA } from './weather-icon.util';

const meta: ComponentMeta<typeof WeatherIcon> = {
  title: 'Atoms/Weather Icon',
  component: WeatherIcon,
};

export default meta;

export const Default = () => (
  <div className="grid grid-cols-4 gap-4">
    {WEATHER_TEST_DATA.map((weather) => (
      <div key={weather} className="flex flex-col items-center">
        <WeatherIcon className="w-8 h-8" weather={weather} />
        {weather ? weather : 'undefined'}
      </div>
    ))}
  </div>
);
