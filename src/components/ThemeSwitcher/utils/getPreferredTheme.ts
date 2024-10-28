import { Theme } from '@store/types';

export function getPreferredTheme(): Theme {
  const isLight = window.matchMedia('(prefers-color-scheme: light)');

  if (isLight) return Theme.light;

  return Theme.dark;
}
