import React, {ReactElement} from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@types';
import {COLORS} from '@config/base';

const Icon = (props: IconProps): ReactElement => {
  const color = props.color || COLORS.TEXT.SECOND;

  const size = props.sizeHeight;
  const width = 22;
  const height = 19.5;
  const scaleHeight = size ? size / height : 1;
  const scaleWidth = size ? size / width : 1;

  return (
    <Svg
      width={width * scaleWidth}
      height={height * scaleHeight}
      viewBox={`0 0 ${width} ${height}`}>
      <Path
        d="M2.48994 10.0019C2.48994 4.53106 7.00744 0.100222 12.5216 0.251889C17.6024 0.392722 21.8491 4.63939 21.9899 9.72022C22.1416 15.2344 17.7108 19.7519 12.2399 19.7519C9.97577 19.7519 7.90661 18.9827 6.25994 17.6827C5.75077 17.2927 5.71828 16.5236 6.17327 16.0686C6.56327 15.6786 7.16994 15.6461 7.60327 15.9819C8.88161 16.9894 10.4958 17.5852 12.2399 17.5852C16.4649 17.5852 19.8774 14.1294 19.8233 9.89355C19.7691 5.86355 16.3783 2.47272 12.3483 2.41856C8.10161 2.36439 4.65661 5.77689 4.65661 10.0019H6.59577C7.08327 10.0019 7.32161 10.5869 6.98577 10.9227L3.96327 13.9561C3.74661 14.1727 3.41078 14.1727 3.19411 13.9561L0.171609 10.9227C-0.175058 10.5869 0.0632752 10.0019 0.550775 10.0019H2.48994ZM11.1566 6.48105C11.1566 6.03689 11.525 5.66855 11.9691 5.66855C12.4133 5.66855 12.7816 6.03689 12.7816 6.47022V10.1536L15.9016 12.0061C16.2808 12.2336 16.4108 12.7319 16.1833 13.1219C15.9558 13.5011 15.4575 13.6311 15.0675 13.4036L11.6875 11.3994C11.3625 11.2044 11.1566 10.8469 11.1566 10.4677V6.48105Z"
        fill={color}
      />
    </Svg>
  );
};

export default Icon;
