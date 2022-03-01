import React, { useCallback } from 'react';
import { MdClose } from 'react-icons/md';
import clsx from 'clsx';

import { useTimeout } from '../../hooks';
import { Button } from '../button';
import { Typography } from '../typography';
import { Notification as NotificationModel } from './notification.model';
import { NotificationIcon } from './notification-icon.component';

export type NotificationProps = {
  className?: string;
  onClear: () => void;
} & Omit<NotificationModel, 'id'>;

export const Notification = ({
  message,
  action,
  status = 'default',
  className,
  onClear,
}: NotificationProps) => {
  const handleActionClick = useCallback(() => {
    onClear();
    action?.onClick();
  }, [action, onClear]);

  useTimeout({ duration: 10000, onTimeout: onClear });

  return (
    <div
      className={clsx(
        'mb-2 flex items-center px-4 py-2',
        'rounded border shadow',
        className
      )}
    >
      <NotificationIcon status={status} />
      <div role="alert" className="mr-2 flex-1 truncate text-sm">
        {message}
      </div>
      <div className="flex flex-none space-x-6">
        {action && (
          <Typography
            as={Button}
            translationKey={action.label}
            onClick={handleActionClick}
          />
        )}

        <Typography
          as={Button}
          translationKey="VALHALLA.ACTIONS.CLOSE"
          onClick={onClear}
        >
          {() => <MdClose />}
        </Typography>
      </div>
    </div>
  );
};
