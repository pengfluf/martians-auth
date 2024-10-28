import { localStorageKeys } from '@constants';
import { ThemeContextValue } from '@context/ThemeContext';
import { Theme } from '@store/types';

import { updateRootElementClassName } from './updateRootElementClassName';

export function updateWithTheme({
  theme,
  updateTheme,
}: {
  theme: Theme;
  updateTheme: ThemeContextValue['updateTheme'];
}) {
  localStorage.setItem(localStorageKeys.theme, theme);
  updateTheme(theme);
  updateRootElementClassName(theme);
}
