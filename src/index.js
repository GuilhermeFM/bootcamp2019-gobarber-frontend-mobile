import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import { store, persistor } from './store';

import Routes from '~/routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {Platform.OS === 'android' && Platform.Version > 22 ? (
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
        ) : (
          <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.1)" />
        )}
        <Routes />
      </PersistGate>
    </Provider>
  );
}
