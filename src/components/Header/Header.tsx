import { Container, ExternalLink, ThemeSwitcher } from '@components';
import { Theme } from '@store/types';
import { getClassName } from '@utils';
import { useThemeContext } from '@utils/context';

import style from './Header.module.css';

export function Header() {
  const { theme } = useThemeContext();
  const githubLinkClassName = getClassName({
    style,
    block: 'github-link',
    modifiers: {
      inverted: theme === Theme.dark,
    },
  });

  return (
    <header className={style.wrapper}>
      <Container contentClassName={style.content}>
        <svg className={style.logo} aria-label="Logo">
          <use href="#logo" />
        </svg>

        <div className={style['right-column']}>
          <ExternalLink
            className={githubLinkClassName}
            href="https://github.com/pengfluf/martians-auth"
          >
            <svg>
              <use href="#github" />
            </svg>
          </ExternalLink>

          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  );
}
