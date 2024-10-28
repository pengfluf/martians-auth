import { createContext, ReactNode, useCallback, useMemo } from 'react';

import * as actions from '@store/actions';
import { AppDispatch, State, Theme, ThemeValue } from '@store/types';

export interface ThemeContextValue {
  theme: State['theme'];
  updateTheme: (payload: Theme) => void;
}

const initialValue: ThemeContextValue = {
  theme: undefined,
  updateTheme: () => {},
};

export const ThemeContext = createContext(initialValue);

interface Props {
  theme: ThemeValue;
  dispatch: AppDispatch;
  children: ReactNode;
}

export function ThemeContextProvider({
  theme,
  dispatch,
  children,
}: Props) {
  const updateTheme = useCallback(
    (themeToUpdate: Theme) => {
      dispatch(actions.updateTheme(themeToUpdate));
    },
    [dispatch],
  );

  const memoValue = useMemo(
    () => ({ theme, updateTheme }),
    [theme, updateTheme],
  );

  return (
    <ThemeContext.Provider value={memoValue}>
      {children}
    </ThemeContext.Provider>
  );
}
