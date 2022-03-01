import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

type LoaderProps = {
  size?: 'sm' | 'md';
  className?: string;
};

export const Loader = ({ size = 'md', className }: LoaderProps) => (
  <div
    className={clsx('relative flex items-center', {
      'h-6 w-6': size === 'md',
      'h-4 w-4': size === 'sm',
    })}
  >
    <motion.div
      className={clsx(
        'absolute bg-neutral-400',
        {
          'h-1.5 w-1.5': size === 'md',
          'h-1 w-1': size === 'sm',
        },
        className
      )}
      animate={{
        x: ['0rem', size === 'md' ? '1.125rem' : '0.75rem', '0rem'],
      }}
      transition={{ duration: 1, repeat: Infinity }}
    />
  </div>
);
