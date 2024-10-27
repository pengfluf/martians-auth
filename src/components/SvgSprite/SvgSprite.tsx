import Logo from '@assets/svg/logo.svg?react';
import Moon from '@assets/svg/moon.svg?react';
import Spinner from '@assets/svg/spinner.svg?react';
import Sun from '@assets/svg/sun.svg?react';

export function SvgSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <defs>
        <Logo />
        <Moon />
        <Spinner />
        <Sun />
      </defs>
    </svg>
  );
}
