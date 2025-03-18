import { useThemeContext } from '@utils/context';

import { useClassNames, useSwitchTheme } from './utils';

import style from './ThemeSwitcher.module.css';

export function ThemeSwitcher() {
  const { theme, updateTheme } = useThemeContext();
  const classNames = useClassNames({ style, theme });

  const switchTheme = useSwitchTheme({ theme, updateTheme });

  if (!theme) return null;

  return (
    <button className={classNames.wrapper} onClick={switchTheme}>
      <div className={classNames.icons}>
        <svg className={classNames.sunIcon}>
          <use href="#sun" />
        </svg>
        <svg className={classNames.moonIcon}>
          <use href="#moon" />
        </svg>
      </div>
    </button>
  );
}
