import React, { useCallback, useEffect, useState } from 'react';

export type UseTimeoutProps = {
  onTimeout: () => void;
  duration: number;
};

export const useTimeout = ({ onTimeout, duration }: UseTimeoutProps) => {
  const [activated, setActivated] = useState(true);
  const timeoutRef = React.useRef<number | undefined>();

  const stopTimeout = useCallback(() => {
    window.clearTimeout(timeoutRef.current);
    setActivated(false);
  }, []);

  useEffect(() => {
    if (activated) {
      timeoutRef.current = window.setTimeout(() => {
        onTimeout();
      }, duration);

      return () => {
        stopTimeout();
      };
    }

    return;
  }, [onTimeout, activated, duration, stopTimeout]);

  const startTimeout = useCallback(() => {
    setActivated(true);
  }, []);

  return {
    stopTimeout,
    startTimeout,
  };
};
