import { FieldState } from '@store/types';

type Validator = (fieldValue: FieldState['value']) => boolean;
type TypeValidatorMap = Record<string, Validator>;
type MissingTypes = string[];

const typeValidatorMap: TypeValidatorMap = {
  uppercased: (value) => value !== value.toLowerCase(),
  lowercased: (value) => value !== value.toUpperCase(),
  numeric: (value) => /[0-9]/.test(value),
};

function getMissingTypes(fieldValue: FieldState['value']) {
  return Object.entries(typeValidatorMap).reduce(
    (acc, [type, validator]) => {
      const isValid = validator(fieldValue);

      if (!isValid) acc.push(type);

      return acc;
    },
    [] as MissingTypes,
  );
}

function getDynamicChunk(missingTypes: MissingTypes): string {
  if (!missingTypes.length) return '';

  if (missingTypes.length === 1) {
    return missingTypes[0];
  }

  const firstTypes = missingTypes.slice(0, -1).join(', ');
  const lastType = missingTypes[missingTypes.length - 1];

  return `${firstTypes} and ${lastType}`;
}

export function getCharacterTypeMessage(
  fieldValue: FieldState['value'],
): string {
  const missingTypes = getMissingTypes(fieldValue);
  const dynamicChunk = getDynamicChunk(missingTypes);

  if (!dynamicChunk) return '';

  return `Should contain ${dynamicChunk} characters.`;
}
