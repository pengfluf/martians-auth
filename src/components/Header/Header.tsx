import { Container, ThemeSwitcher } from '@components';

import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.wrapper}>
      <Container contentClassName={style.content}>
        <svg className={style.logo} aria-label="Logo">
          <use href="#logo" />
        </svg>
        <ThemeSwitcher />
      </Container>
    </header>
  );
}
