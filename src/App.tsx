import style from './App.module.css';
import { SubmitButton } from './components/SubmitButton';

import { Field } from './components/Field';

function App() {
  return (
    <div className={style.container}>
      <form action="/submit">
        <div className={style.fields}>
          <Field label="Email" />
          <Field type="password" label="Password" />
        </div>

        <div className={style['button-wrapper']}>
          <SubmitButton>Sign in</SubmitButton>
        </div>
      </form>
    </div>
  );
}

export default App;
