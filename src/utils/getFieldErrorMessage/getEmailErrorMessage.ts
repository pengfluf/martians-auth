import { FieldState } from '@store/types';

export function getEmailErrorMessage(
  fieldValue: FieldState['value'],
): FieldState['errorMessage'] {
  const errors: string[] = [];

  if (!fieldValue.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/)) {
    errors.push(`Should match example@example.com format.`);
  }

  return errors.join(' ');
}
