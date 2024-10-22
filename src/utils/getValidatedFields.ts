import { FieldKey, Fields, FieldState } from '@store/types';

import { getFieldErrorMessage } from './getFieldErrorMessage';

interface Result {
  hasErrors: boolean;
  fields: Fields;
}

export function getValidatedFields(fields: Fields): Result {
  return (Object.entries(fields) as [FieldKey, FieldState][]).reduce(
    (acc, [key, field]) => {
      const errorMessage = getFieldErrorMessage({
        key,
        value: field.value,
      });

      if (errorMessage && !acc.hasErrors) {
        acc.hasErrors = true;
      }

      acc.fields[key] = { ...field, errorMessage };

      return acc;
    },
    { hasErrors: false, fields: {} } as Result,
  );
}
