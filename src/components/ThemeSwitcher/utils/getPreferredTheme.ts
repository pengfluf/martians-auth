import { PREFER_COLOR_SCHEME_LIGHT } from '@constants';
import { Theme } from '@store/types';

export function getPreferredTheme(): Theme {
  const isLight = window.matchMedia(PREFER_COLOR_SCHEME_LIGHT);

  if (isLight) return Theme.light;

  return Theme.dark;
}
