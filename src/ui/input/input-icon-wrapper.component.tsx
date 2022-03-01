import React, { ReactElement } from 'react';
import clsx from 'clsx';

export type InputIconWrapperProps = {
  icon: ReactElement;
  iconPosition: 'start' | 'end';
};

const iconStyles = {
  left: 'left-1 pl-2',
  right: 'right-1 pr-2',
};

export const InputIconWrapper = ({
  icon,
  iconPosition,
}: InputIconWrapperProps) => {
  const positionStyling =
    iconPosition === 'start' ? iconStyles.left : iconStyles.right;
  return (
    <div
      className={clsx(
        'pointer-events-none absolute top-3 text-2xl text-neutral-600',
        positionStyling
      )}
    >
      {icon}
    </div>
  );
};
