import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React, {ReactElement} from 'react';
import {Route} from '@types';

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
