import React, { ChangeEvent, FocusEvent, forwardRef } from 'react';
import clsx from 'clsx';

import {
  InputIconWrapper,
  InputIconWrapperProps,
} from './input-icon-wrapper.component';

export type InputProps = {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email';
  id?: string;
  name?: string;
  describedby?: string;
  isInvalid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
} & Partial<InputIconWrapperProps>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isInvalid,
      isDisabled,
      icon,
      iconPosition = 'end',
      isRequired,
      type = 'text',
      describedby,
      ...props
    },
    ref
  ) => (
    <div className="relative">
      {icon && <InputIconWrapper icon={icon} iconPosition={iconPosition} />}
      <input
        className={clsx(
          'w-full rounded border py-3 px-4 text-neutral-700 transition duration-300',
          'placeholder-neutral-200 focus:outline-none focus:ring-1 disabled:opacity-40',
          {
            'border-neutral-80 hover:border-neutral-100 hover:ring-neutral-100 focus:border-neutral-400 focus:ring-neutral-400':
              !isInvalid && !isDisabled,
          },
          {
            'border-red-700 ring-red-700 hover:border-red-900 hover:ring-red-900 focus:border-red-900 focus:ring-red-900':
              isInvalid,
          },
          { 'pl-11': icon && iconPosition === 'start' },
          { 'pr-11': icon && iconPosition === 'end' }
        )}
        disabled={isDisabled}
        ref={ref}
        type={type}
        aria-required={isRequired}
        aria-invalid={isInvalid}
        aria-describedby={describedby}
        {...props}
      />
    </div>
  )
);
