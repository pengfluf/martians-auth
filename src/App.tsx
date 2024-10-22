import { useReducer } from 'react';

import { SignIn } from './pages/SignIn/SignIn';
import { initialState, reducer } from './store';

import style from './App.module.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isSubmitting, submitErrorMessage, fields } = state;

  return (
    <div className={style.wrapper}>
      <SignIn
        fields={fields}
        isSubmitting={isSubmitting}
        submitErrorMessage={submitErrorMessage}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
