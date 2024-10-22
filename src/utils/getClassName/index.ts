import { getElements } from './getElements';
import { getModifiers } from './getModifiers';
import { Block, PassedElements, PassedModifiers } from './types';

interface Payload {
  style: CSSModuleClasses;
  block: Block;
  elements?: PassedElements;
  modifiers?: PassedModifiers;
}

export function getClassName({
  style,
  block: passedBlock,
  elements: passedElements = [],
  modifiers: passedModifiers = {},
}: Payload): string {
  const block = style[passedBlock];

  if (!block) {
    throw new Error(`Block "${block}" wasn't found in style.`);
  }

  const elements = getElements({
    style,
    block: passedBlock,
    elements: passedElements,
  });

  const modifiers = getModifiers({
    style,
    block: passedBlock,
    modifiers: passedModifiers,
  });

  return `${block} ${elements} ${modifiers}`.trim();
}
