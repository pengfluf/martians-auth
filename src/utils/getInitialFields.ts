import { fieldTypeMap } from '@constants';
import { FieldKey, Fields } from '@store/types';

type Keys = (keyof typeof FieldKey)[];

export function getInitialFields(): Fields {
  return (Object.keys(FieldKey) as Keys).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        type: fieldTypeMap[key],
        label: `${key[0].toUpperCase()}${key.slice(1)}`,
        value: '',
        errorMessage: '',
      },
    }),
    {} as Fields,
  );
}
