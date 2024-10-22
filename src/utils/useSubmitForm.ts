import { FormEventHandler, useCallback } from 'react';

import * as actions from '@store/actions';
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
        dispatch(actions.updateFields(validatedFields.fields));

        return;
      }

      try {
        dispatch(actions.updateIsSubmitting(true));

        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      } catch (error) {
        dispatch(
          actions.updateSubmitErrorMessage(
            'Something is wrong with the server, please try again later.',
          ),
        );
      } finally {
        dispatch(actions.updateIsSubmitting(false));
      }
    },
    [fields, dispatch],
  );
}
