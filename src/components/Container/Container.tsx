import { ReactNode } from 'react';

import style from './Container.module.css';

interface Props {
  children: ReactNode;
}

export function Container({ children }: Props) {
  return (
    <div className={style.container}>
      <div className={style.content}>{children}</div>
    </div>
  );
}
