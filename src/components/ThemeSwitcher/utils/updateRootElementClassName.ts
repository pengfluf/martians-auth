import { Theme } from '@store/types';

import { getOppositeTheme } from './getOppositeTheme';

export function updateRootElementClassName(theme: Theme): void {
  const rootElement = document.querySelector(':root');

  if (!rootElement) throw new Error(`Root element isn't found.`);

  const oppositeTheme = getOppositeTheme(theme);

  rootElement.classList.remove(`theme-${oppositeTheme}`);
  rootElement.classList.add(`theme-${theme}`);
}
