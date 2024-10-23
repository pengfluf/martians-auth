import {
  ActionType,
  ActionUpdateFieldErrorMessage,
  ActionUpdateFields,
  ActionUpdateFieldValue,
  ActionUpdateIsPasswordRevealed,
  ActionUpdateIsSignedIn,
  ActionUpdateIsSubmitting,
  ActionUpdateSubmitErrorMessage,
  State,
  UpdateFieldErrorMessagePayload,
  UpdateFieldValuePayload,
} from './types';

export function updateIsSignedIn(
  value: State['isSignedIn'],
): ActionUpdateIsSignedIn {
  return { type: ActionType.UPDATE_IS_SIGNED_IN, value };
}

export function updateIsPasswordRevealed(
  value: State['isPasswordRevealed'],
): ActionUpdateIsPasswordRevealed {
  return { type: ActionType.UPDATE_IS_PASSWORD_REVEALED, value };
}

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
  return { type: ActionType.UPDATE_FIELDS, fields };
}
