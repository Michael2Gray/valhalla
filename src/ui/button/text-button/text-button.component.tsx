import React from 'react';
import clsx from 'clsx';

export type TextButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ children, onClick, className }, ref) => (
    <button
      ref={ref}
      type="button"
      className={clsx(
        'rounded p-0.5 text-xs font-bold uppercase tracking-widest transition',
        'hover:text-neutral-hover active:text-neutral-active',
        'focus-visible:ring-neutral focus:outline-none focus-visible:ring focus-visible:ring-offset-1',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
);

TextButton.displayName = 'TextButton';
