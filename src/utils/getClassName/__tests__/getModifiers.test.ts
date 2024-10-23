import { getModifiers } from '../getModifiers';

describe('getModifiers', () => {
  const unhashedFoundation = 'unhashedFoundation';
  const unhashedModifier = 'unhashedModifier';

  const modifierKey = `${unhashedFoundation}--${unhashedModifier}`;
  const modifierValue = 'modifierValue';

  const style = { [modifierKey]: modifierValue };

  it('Should return the correct result if modifier is NOT found in style', () => {
    const unhashedModifiers = { random: true };

    const result = getModifiers({
      style,
      unhashedFoundation,
      unhashedModifiers,
    });

    expect(result).toEqual('');
  });

  it('Should return the correct result if modifier is present in style', () => {
    const unhashedModifiers = { [unhashedModifier]: true };

    const result = getModifiers({
      style,
      unhashedFoundation,
      unhashedModifiers,
    });

    expect(result).toEqual(modifierValue);
  });

  it('Should return the correct result if modifier is present in style but is switched off by a condition', () => {
    const unhashedModifiers = { [unhashedModifier]: false };

    const result = getModifiers({
      style,
      unhashedFoundation,
      unhashedModifiers,
    });

    expect(result).toEqual('');
  });
});
