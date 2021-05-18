import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@config/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.TEXT.SECOND;

  const size = props.sizeHeight;
  const width = 29;
  const height = 29;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M9.0625 8.15625V0H19.9375V8.15625H9.0625ZM19.9375 12.6875H29V29H0V12.6875H9.0625V20.8438H19.9375V12.6875Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
