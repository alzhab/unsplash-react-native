import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@config/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.TEXT.SECOND;

  const size = props.sizeHeight;
  const width = 23;
  const height = 21;
  const scaleHeight = size ? +(size / height) : 1;
  const scaleWidth = size ? +(size / width) : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M13.0521 20.2443C12.1784 21.0597 10.8334 21.0597 9.95977 20.2325L9.83331 20.1143C3.79813 14.501 -0.144849 10.8257 0.00459342 6.24047C0.0735669 4.23147 1.07368 2.30521 2.69456 1.17072C5.72939 -0.956453 9.47695 0.0362259 11.5002 2.47065C13.5234 0.0362259 17.271 -0.96827 20.3058 1.17072C21.9267 2.30521 22.9268 4.23147 22.9958 6.24047C23.1567 10.8257 19.2022 14.501 13.167 20.138L13.0521 20.2443Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
