import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {ReactElement} from 'react';
import {Route} from '@types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomBar} from '@components';

export const StackGenerator = (screens: Route[]) => {
  const Stack = createStackNavigator();

  return (): ReactElement => {
    return (
      <Stack.Navigator
        headerMode={'none'}
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}>
        {screens.map((route) => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </Stack.Navigator>
    );
  };
};

export const BottombarGenerator = (screens: Route[]) => {
  const TabBar = createBottomTabNavigator();
  return (): ReactElement => {
    return (
      <TabBar.Navigator tabBar={BottomBar}>
        {screens.map((route) => (
          <TabBar.Screen
            options={{
              // @ts-ignore
              Icon: route.Icon,
              title: route.title,
            }}
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))}
      </TabBar.Navigator>
    );
  };
};
