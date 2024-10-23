import { getInitialFields } from '@/utils';
import { FieldKey, FieldTypeMap } from '@store/types';

export const fieldTypeMap: FieldTypeMap = {
  [FieldKey.email]: 'text',
  [FieldKey.password]: 'password',
};

export const defaultPassword = 'aaaAAA123';

export const initialFields = getInitialFields();
