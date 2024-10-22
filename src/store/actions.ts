import {
  ActionType,
  ActionUpdateFieldErrorMessage,
  ActionUpdateFields,
  ActionUpdateFieldValue,
  ActionUpdateIsSubmitting,
  ActionUpdateSubmitErrorMessage,
  State,
  UpdateFieldErrorMessagePayload,
  UpdateFieldValuePayload,
} from './types';

export function updateIsSubmitting(
  value: State['isSubmitting'],
): ActionUpdateIsSubmitting {
  return { type: ActionType.UPDATE_IS_SUBMITTING, value };
}

export function updateSubmitErrorMessage(
  value: State['submitErrorMessage'],
): ActionUpdateSubmitErrorMessage {
  return { type: ActionType.UPDATE_SUBMIT_ERROR_MESSAGE, value };
}

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
  value,
}: UpdateFieldErrorMessagePayload): ActionUpdateFieldErrorMessage {
  return { type: ActionType.UPDATE_FIELD_ERROR_MESSAGE, key, value };
}

export function updateFields(fields: State['fields']): ActionUpdateFields {
  console.log('fields', fields);
  return { type: ActionType.UPDATE_FIELDS, fields };
}
