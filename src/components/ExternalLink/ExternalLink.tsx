import { ReactNode } from 'react';

interface Props {
  className?: string;
  href: string;
  children: ReactNode;
}

export function ExternalLink({ className, href, children }: Props) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
