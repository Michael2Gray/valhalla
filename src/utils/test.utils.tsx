import React, { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';

import { Formatting, ValhallaProvider } from '../context';
import { STORYBOOK_LOCALES } from '../i18n/i18n.constant';

type TestRenderConfig = {
  formatting?: Formatting;
  translations?: Record<string, string>;
};

type DefaultTestProvidersConfig = {
  children: ReactNode;
} & TestRenderConfig;

export const DefaultTestProviders = ({
  children,
  formatting,
  translations,
}: DefaultTestProvidersConfig) => (
  <ValhallaProvider
    formatting={formatting}
    language="en"
    locales={{ en: { ...STORYBOOK_LOCALES, ...translations } || {} }}
  >
    {children}
  </ValhallaProvider>
);

export const renderWithProviders = (
  ui: ReactElement,
  config: TestRenderConfig = {}
) => render(<DefaultTestProviders {...config}>{ui}</DefaultTestProviders>);
