import { getModifiers } from './getModifiers';
import { getUnhashedFoundation } from './getUnhashedFoundation';
import { UnhashedModifiers } from './types';

interface Payload {
  style: CSSModuleClasses;
  block: string;
  element?: string;
  modifiers?: UnhashedModifiers;
}

export function getClassName({
  style,
  block: unhashedBlock,
  element: unhashedElement,
  modifiers: unhashedModifiers = {},
}: Payload): string {
  const unhashedFoundation = getUnhashedFoundation({
    unhashedBlock,
    unhashedElement,
  });
  const foundation = style[unhashedFoundation];

  if (!foundation) {
    throw new Error(`"${unhashedFoundation}" wasn't found in style.`);
  }

  const modifiers = getModifiers({
    style,
    unhashedFoundation,
    unhashedModifiers,
  });

  return `${foundation} ${modifiers}`.trim();
}
