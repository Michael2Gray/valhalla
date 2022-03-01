import React, { ReactNode } from 'react';

import { I18n } from '../i18n';
import {
  DEFAULT_FORMATTING,
  Formatting,
  FormattingProvider,
} from './formatting';
import { NotificationsProvider } from './notifications';
import { TooltipProvider } from './tooltip';

type ValhallaProviderProps<Locales extends 'en'> = {
  children: ReactNode;
  language: Locales;
  locales: Record<Locales, any>;
  formatting?: Formatting;
};

export const ValhallaProvider = <Locales extends 'en'>({
  children,
  formatting = DEFAULT_FORMATTING,
  language,
  locales,
}: ValhallaProviderProps<Locales>) => (
  <I18n language={language} locales={locales}>
    <FormattingProvider formatting={formatting}>
      <NotificationsProvider>
        <TooltipProvider>{children}</TooltipProvider>
      </NotificationsProvider>
    </FormattingProvider>
  </I18n>
);
