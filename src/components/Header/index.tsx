import { BackButton, BackIcon, Container, Logo } from './styles';

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton }: Props) {
  return (
    <Container>
      {showBackButton ? (
        <BackButton>
          <BackIcon />
        </BackButton>
      ) : null}
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Logo source={logoImg} />
    </Container>
  );
}
