import { ChangeEvent, memo, useCallback } from 'react';

import { initialFields } from '@constants';
import {
  FieldKey,
  UpdateFieldErrorMessagePayload,
  UpdateFieldValuePayload,
} from '@store/types';
import {
  getAriaDescribedById,
  getClassName,
  getFieldErrorMessage,
} from '@utils';

import style from './Field.module.css';

interface Props {
  id: FieldKey;
  label: string;
  value: string;
  errorMessage?: string;
  isRequired?: boolean;
  updateValue: (payload: UpdateFieldValuePayload) => void;
  updateErrorMessage: (payload: UpdateFieldErrorMessagePayload) => void;
}

function FieldComponent({
  id,
  label,
  value,
  errorMessage,
  isRequired = true,
  updateValue,
  updateErrorMessage,
}: Props) {
  const inputClassName = getClassName({
    style,
    block: 'input',
    modifiers: {
      error: !!errorMessage,
    },
  });
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      updateValue({ key: id, value: event.target.value });

      if (!errorMessage) return;

      const newErrorMessage = getFieldErrorMessage({
        key: id,
        value: event.target.value,
      });

      updateErrorMessage({ key: id, value: newErrorMessage });
    },
    [id, errorMessage, updateValue, updateErrorMessage],
  );

  const ariaDescribedById = getAriaDescribedById(id);

  return (
    <div className={style.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className={inputClassName}
        type={initialFields[id].type}
        value={value}
        onChange={onChange}
        required={isRequired}
        autoComplete={id}
        aria-label={id}
        aria-describedby={ariaDescribedById}
        aria-invalid={!!errorMessage}
      />
      {errorMessage && (
        <p id={ariaDescribedById} className={style['error-message']}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export const Field = memo(FieldComponent);
