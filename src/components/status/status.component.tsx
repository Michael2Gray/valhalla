import React from 'react';
import clsx from 'clsx';

import { ValhallaVariant } from '../../models';
import { STATUS_VARIANTS } from './status.constant';

export type StatusProps = {
  children: React.ReactNode;
  variant?: ValhallaVariant;
  className?: string;
};

export const Status = ({
  variant = 'default',
  children,
  className,
}: StatusProps) => (
  <div
    className={clsx(
      'rounded px-2 py-1 text-xs font-bold',
      STATUS_VARIANTS[variant],
      className
    )}
  >
    {children}
  </div>
);
