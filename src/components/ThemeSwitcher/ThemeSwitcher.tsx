import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { getClassName } from '@utils';

import style from './ThemeSwitcher.module.css';

enum Theme {
  'light' = 'light',
  'dark' = 'dark',
}
type ThemeState = Theme | undefined;

const localStorageKey = 'theme';

function getPreferredTheme(): Theme {
  const isLight = window.matchMedia('(prefers-color-scheme: light)');

  if (isLight) return Theme.light;

  return Theme.dark;
}

function getOppositeTheme(theme: ThemeState): Theme {
  if (theme === Theme.dark) return Theme.light;

  return Theme.dark;
}

function updateRootElementClassName(theme: Theme): void {
  const rootElement = document.querySelector(':root');

  if (!rootElement) throw new Error(`Root element isn't found.`);

  const oppositeTheme = getOppositeTheme(theme);

  rootElement.classList.remove(`theme-${oppositeTheme}`);
  rootElement.classList.add(`theme-${theme}`);
}

function updateWithTheme({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<ThemeState>>;
}) {
  localStorage.setItem(localStorageKey, theme);
  setTheme(theme);
  updateRootElementClassName(theme);
}

const iconBlock = 'icon';

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeState>(undefined);

  const wrapperClassName = getClassName({
    style,
    block: 'wrapper',
    modifiers: {
      dark: theme === Theme.dark,
    },
  });
  const iconsClassName = getClassName({
    style,
    block: 'icons',
    modifiers: {
      dark: theme === Theme.dark,
    },
  });
  const sunIconClassName = getClassName({
    style,
    block: iconBlock,
    modifiers: { sun: true, 'sun-active': theme === Theme.light },
  });
  const moonIconClassName = getClassName({
    style,
    block: iconBlock,
    modifiers: { moon: true, 'moon-active': theme === Theme.dark },
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem(localStorageKey) as Theme;

    if (savedTheme) {
      updateWithTheme({ theme: savedTheme, setTheme });

      return;
    }

    const preferredTheme = getPreferredTheme();

    updateWithTheme({ theme: preferredTheme, setTheme });
  }, []);

  const switchTheme = useCallback(() => {
    const oppositeTheme = getOppositeTheme(theme);

    updateWithTheme({ theme: oppositeTheme, setTheme });
  }, [theme]);

  if (!theme) return null;

  return (
    <button className={wrapperClassName} onClick={switchTheme}>
      <div className={iconsClassName}>
        <svg className={sunIconClassName}>
          <use href="#sun" />
        </svg>
        <svg className={moonIconClassName}>
          <use href="#moon" />
        </svg>
      </div>
    </button>
  );
}
