import { Block, PassedElements } from './types';

interface Payload {
  style: CSSModuleClasses;
  block: Block;
  elements: PassedElements;
}

export function getElements({ style, block, elements }: Payload): string {
  return elements
    .reduce((acc, key) => {
      const element = style[`${block}__${key}`];

      if (!element) return acc;

      acc.push(element);

      return acc;
    }, [] as string[])
    .join(' ');
}
