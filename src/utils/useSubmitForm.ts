import { FormEventHandler, useCallback } from 'react';

import { initialFields } from '@constants';
import {
  updateFields,
  updateIsSignedIn,
  updateIsSubmitting,
  updateSubmitErrorMessage,
} from '@store/actions';
import { AppDispatch, Fields } from '@store/types';

import { getValidatedFields } from './getValidatedFields';

interface Payload {
  fields: Fields;
  dispatch: AppDispatch;
}

export function useSubmitForm({
  fields,
  dispatch,
}: Payload): FormEventHandler<HTMLFormElement> {
  return useCallback(
    async (event) => {
      event.preventDefault();

      const validatedFields = getValidatedFields(fields);

      if (validatedFields.hasErrors) {
        dispatch(updateFields(validatedFields.fields));

        return;
      }

      try {
        dispatch(updateIsSubmitting(true));

        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
        dispatch(updateIsSignedIn(true));
        dispatch(updateFields(initialFields));
      } catch (error) {
        dispatch(
          updateSubmitErrorMessage(
            'Something is wrong with the server, please try again later.',
          ),
        );
      } finally {
        dispatch(updateIsSubmitting(false));
      }
    },
    [fields, dispatch],
  );
}
