import { getUnhashedFoundation } from '../getUnhashedFoundation';

describe('getUnhashedFoundation', () => {
  const unhashedBlock = 'block';
  const unhashedElement = 'element';

  it(`Should return the correct result if there's unhashedElement`, () => {
    const result = getUnhashedFoundation({
      unhashedBlock,
      unhashedElement,
    });

    expect(result).toEqual(`${unhashedBlock}__${unhashedElement}`);
  });

  it(`Should return the correct result if there's NO unhashedElement`, () => {
    const result = getUnhashedFoundation({ unhashedBlock });

    expect(result).toEqual(unhashedBlock);
  });
});
