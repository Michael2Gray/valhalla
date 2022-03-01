import React from 'react';

export type LegendProps = { children: React.ReactNode };

export const Legend = ({ children }: LegendProps) => (
  <legend className="text-lg font-bold text-neutral-500">{children}</legend>
);
