import React from 'react';
import clsx from 'clsx';

import { ValhallaVariant } from '../../models';
import { CHIP_VARIANTS } from './chip.constant';

export type ChipProps = {
  children: React.ReactNode;
  variant?: ValhallaVariant;
  className?: string;
};

export const Chip = ({
  variant = 'default',
  children,
  className,
}: ChipProps) => (
  <div
    className={clsx(
      'px-2 py-1 rounded text-xs font-bold',
      CHIP_VARIANTS[variant],
      className
    )}
  >
    {children}
  </div>
);
