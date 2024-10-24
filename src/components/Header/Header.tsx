import LogoSvg from '@assets/logo.svg';
import { Container } from '@components';

import style from './Header.module.css';

export function Header() {
  return (
    <header className={style.wrapper}>
      <Container contentClassName={style.content}>
        <img
          className={style.logo}
          src={LogoSvg}
          alt="Logo"
          aria-label="Logo"
        />
      </Container>
    </header>
  );
}
