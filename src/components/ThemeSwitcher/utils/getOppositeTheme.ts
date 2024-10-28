import { Theme, ThemeValue } from '@store/types';

export function getOppositeTheme(theme: ThemeValue): Theme {
  if (theme === Theme.dark) return Theme.light;

  return Theme.dark;
}
