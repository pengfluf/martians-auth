import { fieldTypeMap } from '../store/constants';
import { FieldKey, Fields } from '../store/types';

type Keys = (keyof typeof FieldKey)[];

export function getInitialFields(): Fields {
  return (Object.keys(FieldKey) as Keys).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        type: fieldTypeMap[key],
        value: '',
        errorMessage: '',
      },
    }),
    {} as Fields,
  );
}
