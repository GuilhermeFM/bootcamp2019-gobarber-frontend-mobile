import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

// AsyncStorage is needed here to avoid creating
// multiple connections on each app refresh

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.15.3' })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  tron.clear();

  console.tron = tron;
}
