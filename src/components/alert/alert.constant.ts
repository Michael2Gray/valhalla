import { ValhallaVariant } from '../../models';

export const ALERT_VARIANTS: Record<ValhallaVariant, string> = {
  default: 'bg-neutral-200',
  info: 'bg-blue-100',
  success: 'bg-green-100',
  error: 'bg-red-100',
  warning: 'bg-yellow-200',
};

export const HEADING_VARIANTS: Record<ValhallaVariant, string> = {
  default: 'text-neutral-800',
  info: 'text-blue-800',
  success: 'text-green-800',
  error: 'text-red-800',
  warning: 'text-yellow-700',
};
