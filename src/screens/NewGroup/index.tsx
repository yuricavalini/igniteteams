import { Button, Header, Highlight, Input } from '@components';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { useState } from 'react';
import { Alert } from 'react-native';

import { Container, Content, Icon } from './styles';

export function NewGroup() {
  const [group, setGroup] = useState<string>('');

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (!group.trim().length) {
        return Alert.alert('Novo Grupo', 'Informe o nome da turma.');
      }

      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      console.log(error);

      if (error instanceof AppError) {
        Alert.alert('Novo Grupo', error.message);
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo.');
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
