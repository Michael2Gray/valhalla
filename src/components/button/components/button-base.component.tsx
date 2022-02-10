import React, { forwardRef, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

import { BUTTON_BASE_VARIANTS } from '../constants';

export type ButtonBasePublicProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof BUTTON_BASE_VARIANTS;
  size?: 'sm' | 'md';
  isDisabled?: boolean;
  isLoading?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

type ButtonBaseProps = ButtonBasePublicProps & {
  className?: string;
  'aria-label'?: string;
};

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (
    {
      type = 'button',
      variant = 'solid',
      size = 'md',
      isLoading = false,
      isDisabled,
      children,
      className,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      disabled={isLoading || isDisabled}
      className={clsx(
        'flex items-center justify-center rounded border font-bold transition',
        'focus-visible:ring-brand focus:outline-none focus-visible:ring focus-visible:ring-offset-1',
        'disabled:cursor-not-allowed disabled:opacity-40',
        BUTTON_BASE_VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

ButtonBase.displayName = 'ButtonBase';
