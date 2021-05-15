import React, {Component, ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Navigations} from '@types';
import {Onboarding, AuthNavigation, MainNavigation} from '@modules';
import {observer} from 'mobx-react';
import {Message, Modal} from '@components';
import {
  authStore,
  modalStore,
  noticeMessageStore,
  onboardingStore,
} from '@stores';
import {navigationRef} from '../utils/navigate';
import {NAVIGATION_COLORS} from '@config/base';

const navigations = [
  {
    name: Navigations.Onboarding,
    component: Onboarding,
  },
  {
    name: Navigations.Auth,
    component: AuthNavigation,
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

    const isAuthorized = authStore.isAuthorized;

    const firstScreen = showOnboarding
      ? Navigations.Onboarding
      : isAuthorized
      ? Navigations.Main
      : Navigations.Auth;

    return (
      <>
        <NavigationContainer
          ref={navigationRef}
          theme={{
            dark: false,
            colors: NAVIGATION_COLORS,
          }}>
          <Stack.Navigator
            headerMode={'none'}
            initialRouteName={
              showOnboarding ? Navigations.Onboarding : firstScreen
            }>
            {navigations.map((route) => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>

        <Message
          show={noticeMessageStore.show}
          text={noticeMessageStore.text}
          type={noticeMessageStore.type}
        />
        <Modal open={modalStore.modalProps.show} close={modalStore.closeModal}>
          {modalStore.modalProps.children()}
        </Modal>
      </>
    );
  }
}

export default RootNavigation;
