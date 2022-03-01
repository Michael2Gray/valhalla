import clsx from 'clsx';

export const BUTTON_BASE_VARIANTS = {
  solid: clsx(
    'bg-neutral-700 text-white border-transparent',
    'hover:bg-neutral-800 active:bg-neutral-900 disabled:bg-neutral-700'
  ),
  ghost: clsx(
    'text-neutral-500 border-neutral-500',
    'hover:text-neutral-600 hover:border-neutral-600',
    'active:text-neutral-700 active:border-neutral-700',
    'disabled:text-neutral-500 disabled:border-neutral-500'
  ),
  transparent: clsx(
    'border-transparent text-neutral-700',
    'hover:text-neutral-500 active:text-neutral-800 disabled:text-neutral-700'
  ),
};
