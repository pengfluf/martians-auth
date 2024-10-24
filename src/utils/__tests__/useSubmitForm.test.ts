jest.mock('@store/actions');
jest.mock('@utils/getValidatedFields');

import { FormEvent } from 'react';
import { renderHook } from '@testing-library/react';

import { initialFields } from '@constants';
import {
  updateFields,
  updateIsSignedIn,
  updateIsSubmitting,
  updateSubmitErrorMessage,
} from '@store/actions';
import { AppDispatch, FieldKey, Fields } from '@store/types';
import { getValidatedFields } from '@utils/getValidatedFields';
import { useSubmitForm } from '@utils/useSubmitForm';

describe('useSubmitForm', () => {
  const fields = { ...initialFields };

  const validatedFields = { ...initialFields };
  validatedFields[FieldKey.email].value = 'test@test.com';

  const dispatch = jest.fn();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const event = {
    preventDefault: jest.fn(),
  } as FormEvent<HTMLFormElement>;

  beforeEach(() => {
    (getValidatedFields as jest.Mock).mockReturnValue({
      hasErrors: false,
      fields: validatedFields,
    });
  });

  it(`Should call event.preventDefault()`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch });
    });

    await result.current(event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  it(`Should call getValidatedFields with the correct payload`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch });
    });

    await result.current(event);

    expect(getValidatedFields).toHaveBeenCalledTimes(1);
    expect(getValidatedFields).toHaveBeenCalledWith(fields);
  });

  it(`Should call updateFields correctly if validatedFields has errors`, async () => {
    (getValidatedFields as jest.Mock).mockReturnValue({
      hasErrors: true,
      fields: validatedFields,
    });

    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch });
    });

    await result.current(event);

    expect(updateFields).toHaveBeenCalledTimes(1);
    expect(updateFields).toHaveBeenCalledWith(validatedFields);
  });

  it(`Should call updateFields correctly if validatedFields does NOT have errors`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch });
    });

    await result.current(event);

    expect(updateFields).toHaveBeenCalledTimes(1);
    expect(updateFields).toHaveBeenCalledWith(validatedFields);
  });

  it(`Should call updateIsSubmitting correctly if server is ok`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch });
    });

    await result.current(event);

    expect(updateIsSubmitting).toHaveBeenCalledTimes(2);
    expect(updateIsSubmitting).toHaveBeenNthCalledWith(1, true);
    expect(updateIsSubmitting).toHaveBeenNthCalledWith(2, false);
  });

  it(`Should call updateIsSubmitting correctly if server is NOT ok`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch, isServerOk: false });
    });

    await result.current(event);

    expect(updateIsSubmitting).toHaveBeenCalledTimes(2);
    expect(updateIsSubmitting).toHaveBeenNthCalledWith(1, true);
    expect(updateIsSubmitting).toHaveBeenNthCalledWith(2, false);
  });

  it(`Should call updateIsSignedIn correctly if server is ok`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch });
    });

    await result.current(event);

    expect(updateIsSignedIn).toHaveBeenCalledTimes(1);
    expect(updateIsSignedIn).toHaveBeenCalledWith(true);
  });

  it(`Should NOT call updateIsSignedIn if server is NOT ok`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch, isServerOk: false });
    });

    await result.current(event);

    expect(updateIsSignedIn).not.toHaveBeenCalled();
  });

  it(`Should call updateFields if server is ok`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch });
    });

    await result.current(event);

    expect(updateFields).toHaveBeenCalledTimes(1);
    expect(updateFields).toHaveBeenCalledWith(initialFields);
  });

  it(`Should NOT call updateFields if server is NOT ok`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch, isServerOk: false });
    });

    await result.current(event);

    expect(updateFields).not.toHaveBeenCalled();
  });

  it(`Should call updateSubmitErrorMessage if server is NOT ok`, async () => {
    const { result } = renderHook(() => {
      return useSubmitForm({ fields, dispatch, isServerOk: false });
    });

    await result.current(event);

    expect(updateSubmitErrorMessage).toHaveBeenCalledTimes(1);
  });

  it(`Should return the same callback if the fields did NOT change`, () => {
    const { result, rerender } = renderHook(
      ({ newFields }: { newFields: Fields }) => {
        return useSubmitForm({
          fields: newFields,
          dispatch,
          isServerOk: false,
        });
      },
      { initialProps: { newFields: fields } },
    );

    const firstResult = result.current;

    rerender({ newFields: fields });

    const secondResult = result.current;

    expect(firstResult).toBe(secondResult);
  });

  it(`Should return a new callback if the fields did change`, () => {
    const { result, rerender } = renderHook(
      ({ newFields }: { newFields: Fields }) => {
        return useSubmitForm({
          fields: newFields,
          dispatch,
          isServerOk: false,
        });
      },
      { initialProps: { newFields: fields } },
    );

    const firstResult = result.current;

    const newFields = { ...fields };
    newFields[FieldKey.email].value = 'new@test.com';

    rerender({ newFields });

    const secondResult = result.current;

    expect(firstResult).not.toBe(secondResult);
  });

  it(`Should return the same callback if dispatch did NOT change`, () => {
    const { result, rerender } = renderHook(
      ({ newDispatch }: { newDispatch: AppDispatch }) => {
        return useSubmitForm({
          fields,
          dispatch: newDispatch,
          isServerOk: false,
        });
      },
      { initialProps: { newDispatch: dispatch } },
    );

    const firstResult = result.current;

    rerender({ newDispatch: dispatch });

    const secondResult = result.current;

    expect(firstResult).toBe(secondResult);
  });

  it(`Should return a new callback if dispatch did change`, () => {
    const { result, rerender } = renderHook(
      ({ newDispatch }: { newDispatch: AppDispatch }) => {
        return useSubmitForm({
          fields,
          dispatch: newDispatch,
          isServerOk: false,
        });
      },
      { initialProps: { newDispatch: dispatch } },
    );

    const firstResult = result.current;

    rerender({ newDispatch: jest.fn() });

    const secondResult = result.current;

    expect(firstResult).not.toBe(secondResult);
  });

  it(`Should return the same callback if isServerOk did NOT change`, () => {
    const { result, rerender } = renderHook(
      ({ newIsServerOk }: { newIsServerOk: boolean }) => {
        return useSubmitForm({
          fields,
          dispatch,
          isServerOk: newIsServerOk,
        });
      },
      { initialProps: { newIsServerOk: true } },
    );

    const firstResult = result.current;

    rerender({ newIsServerOk: true });

    const secondResult = result.current;

    expect(firstResult).toBe(secondResult);
  });

  it(`Should return a new callback if isServerOk did change`, () => {
    const { result, rerender } = renderHook(
      ({ newIsServerOk }: { newIsServerOk: boolean }) => {
        return useSubmitForm({
          fields,
          dispatch,
          isServerOk: newIsServerOk,
        });
      },
      { initialProps: { newIsServerOk: true } },
    );

    const firstResult = result.current;

    rerender({ newIsServerOk: false });

    const secondResult = result.current;

    expect(firstResult).not.toBe(secondResult);
  });

  it(`Should return the same callback if serverDelay did NOT change`, () => {
    const { result, rerender } = renderHook(
      ({ newServerDelay }: { newServerDelay: number }) => {
        return useSubmitForm({
          fields,
          dispatch,
          serverDelay: newServerDelay,
        });
      },
      { initialProps: { newServerDelay: 0 } },
    );

    const firstResult = result.current;

    rerender({ newServerDelay: 0 });

    const secondResult = result.current;

    expect(firstResult).toBe(secondResult);
  });

  it(`Should return the same callback if serverDelay did NOT change`, () => {
    const { result, rerender } = renderHook(
      ({ newServerDelay }: { newServerDelay: number }) => {
        return useSubmitForm({
          fields,
          dispatch,
          serverDelay: newServerDelay,
        });
      },
      { initialProps: { newServerDelay: 0 } },
    );

    const firstResult = result.current;

    rerender({ newServerDelay: 1000 });

    const secondResult = result.current;

    expect(firstResult).not.toBe(secondResult);
  });
});
