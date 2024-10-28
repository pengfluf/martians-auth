import { useContext } from 'react';

import { ThemeContext, ThemeContextValue } from '@context/ThemeContext';

export function useThemeContext(): ThemeContextValue {
  return useContext(ThemeContext);
}
