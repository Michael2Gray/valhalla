import React from 'react';
import { format } from 'date-fns';

type DateFormatProps = {
  date: number | string | Date;
  dateFormat: string;
  dateTimeFormat?: string;
};

export const DateFormat = ({
  date,
  dateFormat,
  dateTimeFormat,
}: DateFormatProps) => (
  <>{format(new Date(date), dateTimeFormat ? dateTimeFormat : dateFormat)}</>
);
