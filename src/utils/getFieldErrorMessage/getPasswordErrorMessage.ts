import { FieldState } from '@store/types';

import { getCharacterTypeMessage } from './getCharacterTypeMessage';

const minLength = 4;

export function getPasswordErrorMessage(
  fieldValue: FieldState['value'],
): FieldState['errorMessage'] {
  const errors: string[] = [];

  if (fieldValue.length < minLength) {
    errors.push(`Should have at least ${minLength} characters.`);
  }

  const characterTypeMessage = getCharacterTypeMessage(fieldValue);

  if (characterTypeMessage) errors.push(characterTypeMessage);

  return errors.join(' ');
}
