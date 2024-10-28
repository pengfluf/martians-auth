import { initialFields } from '@constants';

import { Action, ActionType, State } from './types';

export const initialState: State = {
  theme: undefined,
  isSignedIn: false,
  isSubmitting: false,
  isPasswordRevealed: false,
  submitErrorMessage: '',
  fields: initialFields,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionType.UPDATE_THEME:
      return { ...state, theme: action.value };

    case ActionType.UPDATE_IS_SIGNED_IN:
      return { ...state, isSignedIn: action.value };

    case ActionType.UPDATE_IS_PASSWORD_REVEALED:
      return { ...state, isPasswordRevealed: action.value };

    case ActionType.UPDATE_IS_SUBMITTING:
      return { ...state, isSubmitting: action.value };

    case ActionType.UPDATE_SUBMIT_ERROR_MESSAGE:
      return { ...state, submitErrorMessage: action.value };

    case ActionType.UPDATE_FIELD_VALUE:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.key]: {
            ...state.fields[action.key],
            value: action.value,
          },
        },
      };

    case ActionType.UPDATE_FIELD_ERROR_MESSAGE:
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.key]: {
            ...state.fields[action.key],
            errorMessage: action.value,
          },
        },
      };

    case ActionType.UPDATE_FIELDS:
      return {
        ...state,
        fields: action.fields,
      };

    default:
      return state;
  }
}
