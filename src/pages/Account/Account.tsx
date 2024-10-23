import { Container } from '@/components';

interface Props {
  signOut: VoidFunction;
}

export function Account({ signOut }: Props) {
  return (
    <Container>
      <p>Signed in</p>
      <button onClick={signOut}>Sign out</button>
    </Container>
  );
}
