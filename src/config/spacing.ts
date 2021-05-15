import {horizontalScale, verticalScale} from './mixins';
import {NativeModules, Platform} from 'react-native';

const {StatusBarManager} = NativeModules;

const insets: any = {bottom: Platform.OS === 'ios' ? 34 : 0};

export const STATUS_BAR_HEIGHT = StatusBarManager.HEIGHT;

export const CONTAINER_HOR_PADDING = horizontalScale(28);
const CONTAINER_VER_PADDING = verticalScale(24);

export const CONTAINER_VER_TOP_PADDING =
  STATUS_BAR_HEIGHT + CONTAINER_VER_PADDING;
export const CONTAINER_VER_BOTTOM_PADDING = CONTAINER_VER_PADDING;

export const TABBAR_HEIGHT = verticalScale(60) + insets.bottom;
export const TABBAR_BOTTOM = insets.bottom;

export const HEADER_PADDING_BOTTOM = 15;
export const HEADER_PADDING_TOP = 0 + STATUS_BAR_HEIGHT;
export const HEADER_HEIGHT =
  verticalScale(40) + HEADER_PADDING_BOTTOM + HEADER_PADDING_TOP;
