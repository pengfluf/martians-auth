interface FieldState {
  type: HTMLInputElement['type'];
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
  fields: Fields;
}

export enum ActionType {
  UPDATE_FIELD_VALUE = 'UPDATE_FIELD_VALUE',
  UPDATE_FIELD_ERROR_MESSAGE = 'UPDATE_FIELD_ERROR_MESSAGE',
  UPDATE_FIELDS = 'UPDATE_FIELDS',
}

export interface ActionUpdateFieldValue {
  type: ActionType.UPDATE_FIELD_VALUE;
  key: FieldKey;
  value: FieldState['value'];
}

export interface ActionUpdateFieldErrorMessage {
  type: ActionType.UPDATE_FIELD_ERROR_MESSAGE;
  key: FieldKey;
  message: FieldState['errorMessage'];
}

export interface ActionUpdateFields {
  type: ActionType.UPDATE_FIELDS;
  fields: Fields;
}

export type Action =
  | ActionUpdateFieldValue
  | ActionUpdateFieldErrorMessage
  | ActionUpdateFields;
