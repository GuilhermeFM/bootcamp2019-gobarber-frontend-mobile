import React from 'react';
import { Platform, StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

export default function App() {
  return (
    <>
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
    </>
  );
}
