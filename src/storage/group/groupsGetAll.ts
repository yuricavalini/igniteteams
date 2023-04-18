import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupsGetAll() {
  try {
    const storage: string | null = await AsyncStorage.getItem(GROUP_COLLECTION);

    return storage ? (JSON.parse(storage) as string[]) : [];
  } catch (error) {
    console.log(error);
    throw error;
  }
}
