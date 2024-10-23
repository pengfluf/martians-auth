import { UnhashedModifiers } from './types';

interface Payload {
  style: CSSModuleClasses;
  unhashedFoundation: string;
  unhashedModifiers: UnhashedModifiers;
}

export function getModifiers({
  style,
  unhashedFoundation,
  unhashedModifiers,
}: Payload): string {
  return Object.entries(unhashedModifiers)
    .reduce((acc, [key, value]) => {
      const modifier = style[`${unhashedFoundation}--${key}`];

      if (!modifier) return acc;

      if (value) acc.push(modifier);

      return acc;
    }, [] as string[])
    .join(' ');
}
