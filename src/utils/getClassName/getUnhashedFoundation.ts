interface Payload {
  unhashedBlock: string;
  unhashedElement?: string;
}

export function getUnhashedFoundation({
  unhashedBlock,
  unhashedElement,
}: Payload): string {
  if (!unhashedElement) return unhashedBlock;

  return `${unhashedBlock}__${unhashedElement}`;
}
