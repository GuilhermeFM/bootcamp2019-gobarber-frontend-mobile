import React, { useEffect, useState } from 'react';
import { Keyboard, Platform, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

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
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
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
