import { memo, useMemo } from 'react';
import { nanoid } from 'nanoid';

import { getClassName } from '../../utils';

import style from './Field.module.css';

interface Props {
  type?: HTMLInputElement['type'];
  label: string;
  errorMessage?: string;
}

function FieldComponent({ type = 'text', label, errorMessage }: Props) {
  const id = useMemo(() => nanoid(5), []);
  const inputClassName = getClassName({
    style,
    block: 'input',
    modifiers: {
      error: !!errorMessage,
    },
  });

  return (
    <div className={style.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={inputClassName} type={type} />
      {errorMessage && (
        <p className={style['error-message']}>{errorMessage}</p>
      )}
    </div>
  );
}

export const Field = memo(FieldComponent);
