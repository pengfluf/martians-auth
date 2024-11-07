import { FieldAttrsMap, FieldKey } from '@store/types';
import { getInitialFields } from '@utils';

export const fieldAttrsMap: FieldAttrsMap = {
  [FieldKey.email]: {
    type: 'email',
  },
  [FieldKey.password]: {
    type: 'password',
  },
};

export const defaultPassword = 'aaaAAA123';

export const initialFields = getInitialFields();

export const localStorageKeys = {
  theme: 'theme',
} as const;
