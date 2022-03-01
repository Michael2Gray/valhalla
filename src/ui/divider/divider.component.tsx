import React from 'react';
import clsx from 'clsx';

type DividerProps = { className?: string };

export const Divider = ({ className }: DividerProps) => (
  <div className={clsx('w-full border-b bg-neutral-100 ', className)} />
);
