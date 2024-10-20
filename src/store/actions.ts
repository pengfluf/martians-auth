import {
  ActionType,
  ActionUpdateFieldValue,
  ActionUpdateFieldErrorMessage,
  ActionUpdateFields,
} from './types';

type ActionWithoutType<T> = Omit<T, 'type'>;
type UpdateFieldValuePayload = ActionWithoutType<ActionUpdateFieldValue>;
type UpdateFieldErrorMessagePayload =
  ActionWithoutType<ActionUpdateFieldErrorMessage>;
type UpdateFieldsPayload = ActionWithoutType<ActionUpdateFields>;

export function updateFieldValue({
  key,
  value,
}: UpdateFieldValuePayload): ActionUpdateFieldValue {
  return {
    type: ActionType.UPDATE_FIELD_VALUE,
    key,
    value,
  };
}

export function updateFieldErrorMessage({
  key,
  message,
}: UpdateFieldErrorMessagePayload): ActionUpdateFieldErrorMessage {
  return { type: ActionType.UPDATE_FIELD_ERROR_MESSAGE, key, message };
}

export function updateFields({
  fields,
}: UpdateFieldsPayload): ActionUpdateFields {
  return { type: ActionType.UPDATE_FIELDS, fields };
}
