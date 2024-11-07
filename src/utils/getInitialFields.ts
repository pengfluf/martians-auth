import { fieldAttrsMap as attrs } from '@constants';
import { FieldKey, Fields, FieldState } from '@store/types';

type Keys = (keyof typeof FieldKey)[];

export function getInitialFields(): Fields {
  return (Object.keys(FieldKey) as Keys).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        type: attrs[key].type,
        label: `${key[0].toUpperCase()}${key.slice(1)}`,
        value: '',
        errorMessage: '',
      } as FieldState,
    }),
    {} as Fields,
  );
}
