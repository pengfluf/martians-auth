import { MouseEventHandler, useCallback } from 'react';

import SpinnerSvg from '@assets/spinner.svg';
import { Container, Field, SubmitButton } from '@components';
import { defaultPassword } from '@constants';
import * as actions from '@store/actions';
import {
  AppDispatch,
  FieldKey,
  State,
  UpdateFieldErrorMessagePayload,
  UpdateFieldValuePayload,
} from '@store/types';
import { testIds } from '@test/constants';
import { useSubmitForm } from '@utils';

import { SecondaryActions } from './components';

import style from './SignIn.module.css';

interface Props {
  fields: State['fields'];
  isSubmitting: State['isSubmitting'];
  isPasswordRevealed: State['isPasswordRevealed'];
  submitErrorMessage: State['submitErrorMessage'];
  dispatch: AppDispatch;
}

export function SignIn({
  fields,
  isSubmitting,
  isPasswordRevealed,
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

  const fillFields: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();

      const newFields = {
        ...fields,
        [FieldKey.email]: {
          ...fields[FieldKey.email],
          value: 'example@example.com',
          errorMessage: '',
        },
        [FieldKey.password]: {
          ...fields[FieldKey.password],
          value: defaultPassword,
          errorMessage: '',
        },
      };

      dispatch(actions.updateFields(newFields));
    },
    [fields, dispatch],
  );

  const revealPassword: MouseEventHandler<HTMLButtonElement> = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(actions.updateIsPasswordRevealed(true));
    },
    [dispatch],
  );

  return (
    <div data-test-id={testIds.signIn}>
      <Container contentClassName={style.content}>
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

          <SecondaryActions
            isPasswordRevealed={isPasswordRevealed}
            fillFields={fillFields}
            revealPassword={revealPassword}
          />
        </form>
      </Container>
    </div>
  );
}
