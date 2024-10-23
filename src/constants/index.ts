import { FieldKey, FieldTypeMap } from '@store/types';
import { getInitialFields } from '@utils';

export const fieldTypeMap: FieldTypeMap = {
  [FieldKey.email]: 'text',
  [FieldKey.password]: 'password',
};

export const defaultPassword = 'aaaAAA123';

export const initialFields = getInitialFields();
