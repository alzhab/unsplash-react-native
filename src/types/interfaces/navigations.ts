import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {RouteProp} from '@react-navigation/native';
import {IconProps, Navigations} from '@types';
import {ReactElement} from 'react';

export interface NavigationProps {
  route: RouteProp<any, any>;
  navigation: StackNavigationProp<any, any>;
}

export interface Route {
  name: Navigations;
  component: any;
  Icon?: (props: IconProps) => ReactElement,
  title?: string
}
