import React from 'react';
import { motion } from 'framer-motion';

import { getSvgSrcFromWeatherInfo } from './weather-icon.util';

type WeatherIconProps = {
  weather?: string;
  className?: string;
};

export const WeatherIcon = ({ weather, className }: WeatherIconProps) => (
  <div className={className}>
    <motion.img
      src={getSvgSrcFromWeatherInfo(weather)}
      alt={`Weather ${weather}`}
    />
  </div>
);
