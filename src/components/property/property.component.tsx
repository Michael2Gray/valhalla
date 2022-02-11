import React from 'react';
import clsx from 'clsx';

type PropertyProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  labelClassName?: string;
};

export const Property = ({
  label,
  className,
  labelClassName,
  children,
}: PropertyProps) => (
  <div className={clsx('flex flex-col', className)}>
    <div className={labelClassName}>{label}</div>
    <strong>{children}</strong>
  </div>
);
