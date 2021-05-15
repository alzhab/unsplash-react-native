import {StyleProp} from 'react-native';
import {ButtonTypes, TextFamily} from '@types';
import {ReactElement} from 'react';

export interface ButtonProps {
  title?: string;
  icon?: ReactElement;
  iconPosition?: 'left' | 'right';
  full?: boolean;
  size?: number;
  family?: TextFamily;
  type?: ButtonTypes;
  styles?: StyleProp<any>;
  click: () => void;
  children?: any;
  color?: string;
  activeOpacity?: number;
  borderRad?: number;
  paddings?: {
    top: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export interface ButtonStylesInterface {
  width?: string;
  backgroundColor?: string;
  borderRadius: number;
  borderWidth?: number;
  borderColor?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}
