import React, {ReactElement} from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@config/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.TEXT.SECOND;

  const size = props.sizeHeight;
  const width = 23;
  const height = 23;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Rect
        x="0.000488281"
        width={((width - 3) / 2) * scaleHeight}
        height={((height - 3) / 2) * scaleHeight}
        fill={color}
      />
      <Rect
        x="0.000488281"
        y="13"
        width={((width - 3) / 2) * scaleHeight}
        height={((height - 3) / 2) * scaleHeight}
        fill={color}
      />
      <Rect
        x="13.0005"
        width={((width - 3) / 2) * scaleHeight}
        height={((height - 3) / 2) * scaleHeight}
        fill={color}
      />
      <Rect
        x="13.0005"
        y="13"
        width={((width - 3) / 2) * scaleHeight}
        height={((height - 3) / 2) * scaleHeight}
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
