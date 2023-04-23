import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { PlayerStorageDTO } from './model/PlayerStorageDTO';

export async function playersGetByGroup(group: string) {
  try {
    const storage: string | null = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${group}`
    );

    const players: PlayerStorageDTO[] = storage
      ? (JSON.parse(storage) as PlayerStorageDTO[])
      : [];

    return players;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
