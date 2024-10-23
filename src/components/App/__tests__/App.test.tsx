jest.mock('@store', () => ({
  __esModule: true,
  ...jest.requireActual<typeof import('@store')>('@store'),
}));
jest.mock('@utils', () => ({
  __esModule: true,
  ...jest.requireActual<typeof import('@utils')>('@utils'),
  getClassName: () => '',
}));

import { render, screen } from '@testing-library/react';

import * as store from '@store';
import { testIds } from '@test/constants';

import { App } from '../App';

describe('<App />', () => {
  const defaultInitialState = { ...store.initialState };

  beforeEach(() => {
    jest.mocked(store).initialState = defaultInitialState;
  });

  it(`Should show <Account /> if signedIn`, () => {
    jest.mocked(store).initialState.isSignedIn = true;

    render(<App />);

    const account = screen.getByTestId(testIds.account);

    expect(account).toBeInTheDocument();
  });

  it(`Should NOT show <Account /> if NOT signedIn`, () => {
    jest.mocked(store).initialState.isSignedIn = false;

    render(<App />);

    const account = screen.queryByTestId(testIds.account);

    expect(account).not.toBeInTheDocument();
  });

  it(`Should NOT show <SignIn /> if signedIn`, () => {
    jest.mocked(store).initialState.isSignedIn = true;

    render(<App />);

    const signIn = screen.queryByTestId(testIds.signIn);

    expect(signIn).not.toBeInTheDocument();
  });

  it(`Should show <SignIn /> if NOT signedIn`, () => {
    jest.mocked(store).initialState.isSignedIn = false;

    render(<App />);

    const signIn = screen.getByTestId(testIds.signIn);

    expect(signIn).toBeInTheDocument();
  });
});
