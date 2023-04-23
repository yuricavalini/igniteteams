import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

import { BackButton, BackIcon, Container, Logo } from './styles';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      {showBackButton ? (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      ) : null}
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <Logo source={logoImg} />
    </Container>
  );
}
