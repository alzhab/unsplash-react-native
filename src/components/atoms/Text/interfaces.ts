import {StyleProp} from 'react-native';
import {TextFamily} from '@config/base';
import {TextAlign} from '@types';

export interface TextProps {
  children: any;
  styles?: StyleProp<any>;
  size?: number;
  family?: TextFamily;
  color?: string;
  animated?: boolean;
  numberOfLines?: number;
  textAlign?: TextAlign;
  full?: boolean;
  lineHeight?: number;
  letterSpacing?: number;
}
