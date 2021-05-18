import {StyleSheet} from 'react-native';
import {scaleFont, horizontalScale, verticalScale} from '@config/mixins';
import {AI, TextFamily} from '@types';
import {COLORS} from '@config/base';

export const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    fontSize: scaleFont(36),
    paddingTop: verticalScale(28),
    paddingBottom: verticalScale(20),
    textAlign: AI.center,
    color: COLORS.TEXT.SECOND,
  },
});
