import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@config/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.TEXT.SECOND;

  const size = props.sizeHeight;
  const width = 21;
  const height = 21;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.3509 13.4865H15.3055L20.4288 18.634C20.9242 19.1294 20.9242 19.939 20.4288 20.4344C19.9334 20.9298 19.1238 20.9298 18.6284 20.4344L13.493 15.299V14.3444L13.1667 14.006C11.4751 15.456 9.16715 16.2052 6.71423 15.7944C3.35507 15.2265 0.672567 12.4231 0.261734 9.03979C-0.366599 3.92854 3.93507 -0.37313 9.04632 0.255203C12.4297 0.666037 15.233 3.34854 15.8009 6.7077C16.2117 9.16062 15.4626 11.4685 14.0126 13.1602L14.3509 13.4865ZM2.61801 8.04895C2.61801 11.0577 5.04676 13.4865 8.05551 13.4865C11.0643 13.4865 13.493 11.0577 13.493 8.04895C13.493 5.0402 11.0643 2.61145 8.05551 2.61145C5.04676 2.61145 2.61801 5.0402 2.61801 8.04895Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
