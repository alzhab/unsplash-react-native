import {Platform, StatusBarProps} from 'react-native';

import {colors} from '../../app.config.json';
import {IColors} from '@types';

export const COLORS: IColors = {
  PRIMARY: (colors as any)['PRIMARY'],
  BG: (colors as any)['BG'],
  TEXT: (colors as any)['TEXT'],
  BORDER: (colors as any)['BORDER'],
  OTHER: (colors as any)['OTHER'],
};

export const NAVIGATION_COLORS = {
  primary: COLORS.PRIMARY.MAIN,
  background: COLORS.BG.MAIN,
  card: COLORS.BG.MAIN,
  text: COLORS.TEXT.MAIN,
  border: COLORS.BORDER.MAIN,
  notification: COLORS.PRIMARY.MAIN,
};

export const STATUSBAR_PROPS: StatusBarProps = {
  translucent: Platform.OS === 'android',
  backgroundColor: Platform.OS === 'ios' ? COLORS.PRIMARY.MAIN : 'transparent',
  barStyle: 'dark-content',
};
