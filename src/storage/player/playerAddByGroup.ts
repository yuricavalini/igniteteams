import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { PlayerStorageDTO } from './model/PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup';

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.find(
      (player) => player.name === newPlayer.name
    );

    if (playerAlreadyExists) {
      throw new AppError('Essa pessoa já está adicionada em um time aqui.');
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    /*
      Example: @ignite-teams:player-rocket: []
     */
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
