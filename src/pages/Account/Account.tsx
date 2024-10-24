import { Container } from '@components';
import { testIds } from '@test/constants';

import style from './Account.module.css';

interface Props {
  signOut: VoidFunction;
}

export function Account({ signOut }: Props) {
  return (
    <div data-test-id={testIds.account}>
      <Container contentClassName={style.content}>
        <p className={style['signed-in']}>Signed in 🎉</p>
        <button className={style['sign-out']} onClick={signOut}>
          Sign out
        </button>
      </Container>
    </div>
  );
}
