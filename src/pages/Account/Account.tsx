import { Container } from '@components';
import { testIds } from '@test/constants';

interface Props {
  signOut: VoidFunction;
}

export function Account({ signOut }: Props) {
  return (
    <div data-test-id={testIds.account}>
      <Container>
        <p>Signed in</p>
        <button onClick={signOut}>Sign out</button>
      </Container>
    </div>
  );
}
