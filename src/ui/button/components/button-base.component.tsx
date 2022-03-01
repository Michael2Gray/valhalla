import React, { ComponentPropsWithRef } from 'react';
import clsx from 'clsx';

import { BUTTON_BASE_VARIANTS } from '../constants';

export type ButtonBasePublicProps = ComponentPropsWithRef<'button'> & {
  variant?: keyof typeof BUTTON_BASE_VARIANTS;
  size?: 'sm' | 'md';
  isDisabled?: boolean;
  isLoading?: boolean;
};

type ButtonBaseProps = ButtonBasePublicProps & {
  className?: string;
  'aria-label'?: string;
};

export const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
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
      type={type === 'submit' ? 'submit' : 'button'}
      disabled={isLoading || isDisabled}
      className={clsx(
        'flex items-center justify-center rounded border font-bold transition',
        'focus:outline-none focus-visible:ring focus-visible:ring-offset-1',
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
