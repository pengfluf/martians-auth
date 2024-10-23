import { ReactNode } from 'react';

import style from './Container.module.css';

interface Props {
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

export function Container({
  className = '',
  contentClassName = '',
  children,
}: Props) {
  return (
    <div className={`${style.container} ${className}`.trimEnd()}>
      <div className={`${style.content} ${contentClassName}`.trimEnd()}>
        {children}
      </div>
    </div>
  );
}
