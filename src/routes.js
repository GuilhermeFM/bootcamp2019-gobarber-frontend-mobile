import React, { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

function CustomBottomBar({ ...props }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListenner = Keyboard.addListener(
      'keyboardDidShow',
      () => setVisible(false)
    );

    const keyboardDidHideListenner = Keyboard.addListener(
      'keyboardDidHide',
      () => setVisible(true)
    );

    return () => {
      keyboardDidShowListenner.remove();
      keyboardDidHideListenner.remove();
    };
  }, []);

  return visible && <BottomTabBar {...props} />;
}

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarComponent: props =>
              Platform.OS === 'android' ? (
                <CustomBottomBar {...props} />
              ) : (
                <BottomTabBar {...props} />
              ),
            tabBarOptions: {
              keyboardHidesTabBar: false,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#8d41a5',
                borderTopColor: 'transparent',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
