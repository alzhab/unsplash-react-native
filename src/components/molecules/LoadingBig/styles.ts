import {StyleSheet} from 'react-native';
import {COLORS} from '@config/base';
import {AI, JC} from '@types';

export const styles = StyleSheet.create({
  container: {
    alignItems: AI.center,
    justifyContent: JC.center,
    backgroundColor: COLORS.BG.MAIN,
  },
});
