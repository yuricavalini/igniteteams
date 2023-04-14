import { Container, Logo } from './styles';

import logoImg from '@assets/logo.png';

export function Header() {
  return (
    <Container>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Logo source={logoImg} />
    </Container>
  );
}
