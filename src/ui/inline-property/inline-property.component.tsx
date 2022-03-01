import React from 'react';
import clsx from 'clsx';

type InlinePropertyProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const InlineProperty = ({
  label,
  className,
  children,
}: InlinePropertyProps) => (
  <div className={clsx('flex items-center', className)}>
    <div className="mr-1">{label}</div>
    <strong>{children}</strong>
  </div>
);
