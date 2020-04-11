import { AsyncStorage } from 'react-native';

const HAS_LAUNCHED = 'hasLaunched';

export function setAppLaunched() {
  AsyncStorage.setItem(HAS_LAUNCHED, 'true');
}

export async function checkIfFirstLaunch() {
  return await AsyncStorage.getItem(HAS_LAUNCHED);
}

export async function clearAsyncStorage() {
  AsyncStorage.clear()
}