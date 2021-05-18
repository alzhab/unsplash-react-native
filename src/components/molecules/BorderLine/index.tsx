import React from 'react';
import Svg, {Defs, Line, LinearGradient, Stop} from 'react-native-svg';

const BorderLine = () => {
  return (
    <Svg width="333" height="1" viewBox="0 0 333 1" fill="none">
      <Line
        x1="2.18557e-08"
        y1="0.75"
        x2="333"
        y2="0.750029"
        stroke="white"
        stroke-width="0.5"
      />
      <Line
        x1="2.18557e-08"
        y1="0.75"
        x2="333"
        y2="0.750029"
        stroke="url(#paint0_linear)"
        stroke-width="0.5"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0"
          y1="1"
          x2="333"
          y2="1.00003"
          gradientUnits="userSpaceOnUse">
          <Stop />
          <Stop offset="0.5" stop-opacity="0" />
          <Stop offset="1" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default BorderLine;
