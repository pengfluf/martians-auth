jest.mock('../getModifiers');
jest.mock('../getUnhashedFoundation');

import { getModifiers } from '../getModifiers';
import { getUnhashedFoundation } from '../getUnhashedFoundation';
import { getClassName } from '../';

describe('getClassName', () => {
  const block = 'block';

  const unhashedFoundation = 'unhashedFoundation';

  const foundation = 'foundation';
  const modifiers = 'modifiers';
  const style = { [unhashedFoundation]: foundation };

  beforeEach(() => {
    (getUnhashedFoundation as jest.Mock).mockReturnValue(
      unhashedFoundation,
    );
    (getModifiers as jest.Mock).mockReturnValue(modifiers);
  });

  it(`Should throw if there's no foundation`, () => {
    (getUnhashedFoundation as jest.Mock).mockReturnValue(undefined);

    expect(() => {
      getClassName({ style, block });
    }).toThrow();
  });

  it(`Should return the correct result`, () => {
    const result = getClassName({ style, block });

    expect(result).toEqual(`${foundation} ${modifiers}`);
  });
});
