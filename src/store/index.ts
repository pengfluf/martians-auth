import { getInitialFields } from '../utils';
import { Action, ActionType, State } from './types';

export const initialState: State = {
  fields: getInitialFields(),
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
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
            errorMessage: action.message,
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
