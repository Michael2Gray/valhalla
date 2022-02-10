import React, { forwardRef, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

export type TextButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ children, onClick, className }, ref) => (
    <button
      ref={ref}
      type="button"
      className={clsx(
        'rounded p-0.5 text-xs font-bold uppercase tracking-widest transition',
        'hover:text-brand-hover active:text-brand-active',
        'focus-visible:ring-brand focus:outline-none focus-visible:ring focus-visible:ring-offset-1',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
);

TextButton.displayName = 'TextButton';
