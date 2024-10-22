import { useCallback } from 'react';

import SpinnerSvg from '@assets/spinner.svg';
import { Container, Field, SubmitButton } from '@components';
import * as actions from '@store/actions';
import {
  AppDispatch,
  FieldKey,
  State,
  UpdateFieldErrorMessagePayload,
  UpdateFieldValuePayload,
} from '@store/types';
import { useSubmitForm } from '@utils';

import style from './SignIn.module.css';

interface Props {
  fields: State['fields'];
  isSubmitting: State['isSubmitting'];
  submitErrorMessage: State['submitErrorMessage'];
  dispatch: AppDispatch;
}

export function SignIn({
  fields,
  isSubmitting,
  submitErrorMessage,
  dispatch,
}: Props) {
  const updateFieldValue = useCallback(
    (payload: UpdateFieldValuePayload) => {
      dispatch(actions.updateFieldValue(payload));
    },
    [dispatch],
  );

  const updateFieldErrorMessage = useCallback(
    (payload: UpdateFieldErrorMessagePayload) => {
      dispatch(actions.updateFieldErrorMessage(payload));
    },
    [dispatch],
  );

  const submitForm = useSubmitForm({ fields, dispatch });

  return (
    <div>
      <Container>
        <div className={style.content}>
          <h2>Sign in</h2>

          <form
            className={style.form}
            action="/signin"
            onSubmit={submitForm}
          >
            <div className={style.fields}>
              {Object.entries(fields).map(
                ([key, { label, value, errorMessage }]) => {
                  return (
                    <Field
                      key={key}
                      id={key as FieldKey}
                      label={label}
                      value={value}
                      errorMessage={errorMessage}
                      updateValue={updateFieldValue}
                      updateErrorMessage={updateFieldErrorMessage}
                    />
                  );
                },
              )}
            </div>

            <div className={style['button-wrapper']}>
              {isSubmitting && (
                <img className={style.spinner} src={SpinnerSvg} />
              )}

              <SubmitButton isSubmitting={isSubmitting}>
                {isSubmitting ? '' : 'Sign in'}
              </SubmitButton>
            </div>

            {submitErrorMessage && <p>{submitErrorMessage}</p>}
          </form>
        </div>
      </Container>
    </div>
  );
}
