import {Dimensions, PixelRatio} from 'react-native';
import {COLORS} from '@config/base';
import {number} from 'prop-types';

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const horizontalScale = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;
export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale();

export const boxShadow = (
  color = COLORS.PRIMARY.MAIN,
  offset = {height: 0, width: 0},
  radius = 4,
  opacity = 0.15,
) => {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
};
