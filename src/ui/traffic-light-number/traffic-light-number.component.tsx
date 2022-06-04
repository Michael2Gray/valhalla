import React from 'react';
import clsx from 'clsx';

type TrafficLightNumberProps = {
  value: number;
  total?: number;
};

export const TrafficLightNumber = ({
  value,
  total = 20,
}: TrafficLightNumberProps) => {
  const quarter = total / 4;
  const half = total / 2;

  return (
    <span
      data-testid="traffic-light-number"
      className={clsx({
        'text-yellow-400': value >= quarter && value <= half,
        'text-red-600': value <= quarter,
        'text-green-600': value >= half,
      })}
    >
      {value}
    </span>
  );
};
