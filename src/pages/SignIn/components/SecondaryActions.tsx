import { MouseEventHandler } from 'react';

import { defaultPassword } from '@constants';
import { State } from '@store/types';

import style from './SecondaryActions.module.css';

interface Props {
  isPasswordRevealed: State['isPasswordRevealed'];
  fillFields: MouseEventHandler<HTMLButtonElement>;
  revealPassword: MouseEventHandler<HTMLButtonElement>;
}

export function SecondaryActions({
  isPasswordRevealed,
  fillFields,
  revealPassword,
}: Props) {
  return (
    <div className={style.wrapper}>
      <button className={style.action} onClick={fillFields}>
        Fill out the fields
      </button>

      {!isPasswordRevealed && (
        <button className={style.action} onClick={revealPassword}>
          Forgot password?
        </button>
      )}
      {isPasswordRevealed && (
        <p className={style['password']}>Try {defaultPassword}</p>
      )}
    </div>
  );
}
