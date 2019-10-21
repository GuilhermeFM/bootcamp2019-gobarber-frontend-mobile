import React from 'react';
import { Platform, StatusBar } from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

export default function App() {
  function defineStatusBar() {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      return (
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
      );
    }

    return <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.1)" />;
  }

  return (
    <>
      {defineStatusBar()}
      <Routes />
    </>
  );
}
