import React from 'react';
import { format as formatFns } from 'date-fns';

type DateFormatProps = {
  date: number | string | Date;
  format: string;
};

export const DateFormat = ({ date, format }: DateFormatProps) => (
  <>{formatFns(new Date(date), format)}</>
);
