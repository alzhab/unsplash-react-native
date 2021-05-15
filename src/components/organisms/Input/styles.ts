import {StyleSheet} from 'react-native';
import {scaleFont, horizontalScale} from '@config/mixins';
import {TextFamily} from '@types';

export const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    fontSize: scaleFont(14),
    fontFamily: TextFamily.BOLD,
    paddingVertical: horizontalScale(14),
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
  },
});
