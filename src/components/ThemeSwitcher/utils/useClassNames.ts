import { Theme, ThemeValue } from '@store/types';
import { getClassName } from '@utils';

const iconBlock = 'icon';

interface Payload {
  style: CSSModuleClasses;
  theme: ThemeValue;
}

interface Result {
  wrapper: string;
  icons: string;
  sunIcon: string;
  moonIcon: string;
}

export function useClassNames({ style, theme }: Payload): Result {
  const wrapper = getClassName({
    style,
    block: 'wrapper',
    modifiers: {
      dark: theme === Theme.dark,
    },
  });

  const icons = getClassName({
    style,
    block: 'icons',
    modifiers: {
      dark: theme === Theme.dark,
    },
  });

  const sunIcon = getClassName({
    style,
    block: iconBlock,
    modifiers: { sun: true, 'sun-active': theme === Theme.light },
  });

  const moonIcon = getClassName({
    style,
    block: iconBlock,
    modifiers: { moon: true, 'moon-active': theme === Theme.dark },
  });

  return { wrapper, icons, sunIcon, moonIcon };
}
