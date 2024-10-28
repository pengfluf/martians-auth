import { useEffect } from 'react';

import { localStorageKeys } from '@constants';
import { ThemeContextValue } from '@context/ThemeContext';
import { Theme } from '@store/types';

import { getPreferredTheme } from './getPreferredTheme';
import { updateWithTheme } from './updateWithTheme';

interface Payload {
  updateTheme: ThemeContextValue['updateTheme'];
}

export function useUpdateWithTheme({ updateTheme }: Payload): void {
  useEffect(() => {
    const savedTheme = localStorage.getItem(
      localStorageKeys.theme,
    ) as Theme;

    if (savedTheme) {
      updateWithTheme({ theme: savedTheme, updateTheme });

      return;
    }

    const preferredTheme = getPreferredTheme();

    updateWithTheme({ theme: preferredTheme, updateTheme });
  }, [updateTheme]);
}
