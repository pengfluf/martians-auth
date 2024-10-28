import { useCallback, useReducer } from 'react';

import { Header, SvgSprite } from '@components';
import { ThemeContextProvider } from '@context/ThemeContext';
import { Account, SignIn } from '@pages';
import { initialState, reducer } from '@store';
import * as actions from '@store/actions';

import style from './App.module.css';

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    theme,
    isSignedIn,
    isPasswordRevealed,
    isSubmitting,
    submitErrorMessage,
    fields,
  } = state;

  const signOut = useCallback(() => {
    dispatch(actions.updateIsSignedIn(false));
  }, [dispatch]);

  return (
    <ThemeContextProvider theme={theme} dispatch={dispatch}>
      <SvgSprite />
      <div className={style.wrapper}>
        <Header />

        <main className={style.main}>
          {isSignedIn && <Account signOut={signOut} />}

          {!isSignedIn && (
            <SignIn
              fields={fields}
              isSubmitting={isSubmitting}
              isPasswordRevealed={isPasswordRevealed}
              submitErrorMessage={submitErrorMessage}
              dispatch={dispatch}
            />
          )}
        </main>
      </div>
    </ThemeContextProvider>
  );
}
