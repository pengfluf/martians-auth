import { FormEvent, useCallback } from 'react';

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
  isServerOk?: boolean;
  serverDelay?: number;
}

export function useSubmitForm({
  fields,
  dispatch,
  isServerOk = true,
  serverDelay = 0,
}: Payload): (event: FormEvent) => Promise<void> {
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

        await new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            if (isServerOk) return resolve();

            reject(new Error(`Server isn't ok.`));
          }, serverDelay);
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
    [fields, dispatch, isServerOk, serverDelay],
  );
}
