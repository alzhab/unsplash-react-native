import React, {Component, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {MainNavigation, Onboarding} from '@modules';
import {observer} from 'mobx-react';
import {onboardingStore} from '@stores';
import {navigationRef} from '../utils/navigate';
import {NAVIGATION_COLORS} from '@config/base';
import {Header} from '@components';

const navigations = [
  {
    name: Navigations.Onboarding,
    component: Onboarding,
    options: {
      headerShown: false,
    },
  },
  {
    name: Navigations.Main,
    component: MainNavigation,
  },
];

const Stack = createStackNavigator();

@observer
class RootNavigation extends Component {
  render(): ReactElement {
    const {showOnboarding} = onboardingStore;

    const firstScreen = showOnboarding
      ? Navigations.Onboarding
      : Navigations.Main;

    return (
      <>
        <NavigationContainer
          ref={navigationRef}
          theme={{
            dark: false,
            colors: NAVIGATION_COLORS,
          }}>
          <Stack.Navigator
            screenOptions={{
              header: (props) => <Header />,
            }}
            initialRouteName={
              showOnboarding ? Navigations.Onboarding : firstScreen
            }>
            {navigations.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
                options={route.options || {}}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default RootNavigation;
