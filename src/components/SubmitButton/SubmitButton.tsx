import { State } from '@store/types';

import style from './SubmitButton.module.css';

interface Props {
  isSubmitting: State['isSubmitting'];
  children: string;
}

export function SubmitButton({ isSubmitting, children }: Props) {
  return (
    <input
      role="button"
      disabled={isSubmitting}
      className={style.button}
      type="submit"
      value={children}
    />
  );
}
