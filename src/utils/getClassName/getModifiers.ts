import { Block, PassedModifiers } from './types';

interface Payload {
  style: CSSModuleClasses;
  block: Block;
  modifiers: PassedModifiers;
}

export function getModifiers({
  style,
  block,
  modifiers,
}: Payload): string {
  return Object.entries(modifiers)
    .reduce((acc, [key, value]) => {
      const modifier = style[`${block}--${key}`];

      if (!modifier) return acc;

      if (value) acc.push(modifier);

      return acc;
    }, [] as string[])
    .join(' ');
}
