import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@config/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.TEXT.SECOND;

  const size = props.sizeHeight;
  const width = 14;
  const height = 14;
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
        d="M0.430018 6.19939C0.108125 6.52129 0.108125 7.04318 0.430018 7.36507C0.751911 7.68696 1.2738 7.68696 1.5957 7.36507L5.95841 3.00236L5.95841 12.552C5.95841 13.0073 6.32745 13.3763 6.78267 13.3763C7.2379 13.3763 7.60693 13.0073 7.60693 12.552L7.60693 3.00236L11.9696 7.36507C12.2915 7.68696 12.8134 7.68696 13.1353 7.36507C13.4572 7.04318 13.4572 6.52129 13.1353 6.19939L7.36551 0.42958C7.04362 0.107687 6.52172 0.107687 6.19983 0.42958L0.430018 6.19939Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
