import React, { forwardRef } from 'react';
import clsx from 'clsx';

import { Input, InputProps } from '../input';

export type FormFieldProps = {
  name: string;
  label: string;
  helpText?: string;
} & InputProps;

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    { label, helpText, name, id = name, isDisabled, isInvalid, ...rest },
    ref
  ) => {
    const helpTextId = `${id}-help-text`;

    return (
      <div>
        <label
          className={clsx('mb-2 block', {
            'opacity-40': isDisabled,
          })}
          htmlFor={id}
        >
          {label}
        </label>

        <Input
          id={id}
          name={name}
          ref={ref}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          {...(helpText && { describedby: helpTextId })}
          {...rest}
        />

        {helpText && (
          <div
            className={clsx('mt-2 text-sm', {
              'opacity-40': isDisabled,
              'text-red-700': isInvalid,
            })}
            id={helpTextId}
          >
            {helpText}
          </div>
        )}
      </div>
    );
  }
);
