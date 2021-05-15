import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@config/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.TEXT.MAIN;

  const size = props.sizeHeight;
  const width = 6;
  const height = 12;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M52.392-197.09c-.744,0-.959.329-.959,1.054v1.2h1.983l-.2,1.942H51.434V-187h-2.38v-5.893h-1.6v-1.942h1.6V-196c0-1.959.793-3,3.008-3a11.231,11.231,0,0,1,1.388.082v1.827H52.392"
        transform="translate(-47.45 199)"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
