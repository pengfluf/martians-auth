import { useCallback } from 'react';

import { ThemeContextValue } from '@context/ThemeContext';
import { ThemeValue } from '@store/types';

import { getOppositeTheme } from './getOppositeTheme';
import { updateWithTheme } from './updateWithTheme';

interface Payload {
  theme: ThemeValue;
  updateTheme: ThemeContextValue['updateTheme'];
}

export function useSwitchTheme({
  theme,
  updateTheme,
}: Payload): VoidFunction {
  return useCallback(() => {
    const oppositeTheme = getOppositeTheme(theme);

    updateWithTheme({ theme: oppositeTheme, updateTheme });
  }, [theme, updateTheme]);
}
