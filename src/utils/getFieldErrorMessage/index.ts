import { FieldKey, FieldState } from '@store/types';

import { getEmailErrorMessage } from './getEmailErrorMessage';
import { getPasswordErrorMessage } from './getPasswordErrorMessage';

interface Payload {
  key: FieldKey;
  value: FieldState['value'];
}

export function getFieldErrorMessage({
  key,
  value,
}: Payload): FieldState['errorMessage'] {
  switch (key) {
    case FieldKey.email:
      return getEmailErrorMessage(value);
    case FieldKey.password:
      return getPasswordErrorMessage(value);
    default:
      return '';
  }
}
