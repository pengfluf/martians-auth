import { Dispatch } from 'react';

export enum Theme {
  'light' = 'light',
  'dark' = 'dark',
}
export type ThemeValue = Theme | undefined;

export interface FieldState {
  type: HTMLInputElement['type'];
  label: string;
  value: string;
  errorMessage: string;
}

export enum FieldKey {
  'email' = 'email',
  'password' = 'password',
}

export type FieldTypeMap = Record<FieldKey, HTMLInputElement['type']>;

export type Fields = Record<FieldKey, FieldState>;

export interface State {
  theme: ThemeValue;
  isSignedIn: boolean;
  isSubmitting: boolean;
  isPasswordRevealed: boolean;
  submitErrorMessage: string;
  fields: Fields;
}

export enum ActionType {
  UPDATE_THEME = 'UPDATE_THEME',

  UPDATE_IS_SIGNED_IN = 'UPDATE_IS_SIGNED_IN',
  UPDATE_IS_PASSWORD_REVEALED = 'UPDATE_IS_PASSWORD_REVEALED',

  UPDATE_IS_SUBMITTING = 'UPDATE_IS_SUBMITTING',
  UPDATE_SUBMIT_ERROR_MESSAGE = 'UPDATE_SUBMIT_ERROR_MESSAGE',

  UPDATE_FIELD_VALUE = 'UPDATE_FIELD_VALUE',
  UPDATE_FIELD_ERROR_MESSAGE = 'UPDATE_FIELD_ERROR_MESSAGE',
  UPDATE_FIELDS = 'UPDATE_FIELDS',
}

export interface ActionUpdateTheme {
  type: ActionType.UPDATE_THEME;
  value: Theme;
}

export interface ActionUpdateIsSignedIn {
  type: ActionType.UPDATE_IS_SIGNED_IN;
  value: State['isSignedIn'];
}

export interface ActionUpdateIsPasswordRevealed {
  type: ActionType.UPDATE_IS_PASSWORD_REVEALED;
  value: State['isPasswordRevealed'];
}

export interface ActionUpdateIsSubmitting {
  type: ActionType.UPDATE_IS_SUBMITTING;
  value: State['isSubmitting'];
}

export interface ActionUpdateSubmitErrorMessage {
  type: ActionType.UPDATE_SUBMIT_ERROR_MESSAGE;
  value: State['submitErrorMessage'];
}

export interface ActionUpdateFieldValue {
  type: ActionType.UPDATE_FIELD_VALUE;
  key: FieldKey;
  value: FieldState['value'];
}

export interface ActionUpdateFieldErrorMessage {
  type: ActionType.UPDATE_FIELD_ERROR_MESSAGE;
  key: FieldKey;
  value: FieldState['errorMessage'];
}

export interface ActionUpdateFields {
  type: ActionType.UPDATE_FIELDS;
  fields: Fields;
}

export type Action =
  | ActionUpdateTheme
  | ActionUpdateIsSignedIn
  | ActionUpdateIsPasswordRevealed
  | ActionUpdateIsSubmitting
  | ActionUpdateSubmitErrorMessage
  | ActionUpdateFieldValue
  | ActionUpdateFieldErrorMessage
  | ActionUpdateFields;

export type AppDispatch = Dispatch<Action>;

type ActionWithoutType<T> = Omit<T, 'type'>;
export type UpdateFieldValuePayload =
  ActionWithoutType<ActionUpdateFieldValue>;
export type UpdateFieldErrorMessagePayload =
  ActionWithoutType<ActionUpdateFieldErrorMessage>;
