import { useEffect } from 'react';

import { localStorageKeys, PREFER_COLOR_SCHEME_LIGHT } from '@constants';
import { ThemeContextValue } from '@context/ThemeContext';
import { Theme } from '@store/types';

import { getPreferredTheme } from './getPreferredTheme';
import { updateWithTheme } from './updateWithTheme';

interface Payload {
  updateTheme: ThemeContextValue['updateTheme'];
}

export function useUpdateWithTheme({ updateTheme }: Payload): void {
  useEffect(() => {
    const onChange: MediaQueryList['onchange'] = (event) => {
      const newTheme = event.matches ? Theme.light : Theme.dark;

      updateWithTheme({ theme: newTheme, updateTheme });
    };

    window
      .matchMedia(PREFER_COLOR_SCHEME_LIGHT)
      .addEventListener('change', onChange);

    const savedTheme = localStorage.getItem(
      localStorageKeys.theme,
    ) as Theme;

    if (savedTheme) {
      updateWithTheme({ theme: savedTheme, updateTheme });

      return;
    }

    const preferredTheme = getPreferredTheme();

    updateWithTheme({ theme: preferredTheme, updateTheme });

    return () => {
      window
        .matchMedia(PREFER_COLOR_SCHEME_LIGHT)
        .removeEventListener('change', onChange);
    };
  }, [updateTheme]);
}
