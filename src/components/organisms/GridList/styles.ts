import {StyleSheet} from 'react-native';
import {
  CONTAINER_HOR_PADDING,
  CONTAINER_VER_BOTTOM_PADDING,
} from '@config/spacing';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingHorizontal: CONTAINER_HOR_PADDING,
  },
  columnWrapper: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  contentContainer: {
    width: '100%',
    paddingBottom: CONTAINER_VER_BOTTOM_PADDING,
  },
});
