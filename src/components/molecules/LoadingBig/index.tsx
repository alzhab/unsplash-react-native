import React, {ReactElement} from 'react';
import {Props} from './interfaces';
import {AnimateItTiming} from '../../atoms';
import {StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {COLORS} from '@config/base';

const Loading = (props: Props): ReactElement | null => {
  return (
    <AnimateItTiming
      remove
      style={[
        StyleSheet.absoluteFill,
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.BG.SECOND,
        },
      ]}
      show={props.loading}
      interpolations={[
        {
          dir: 'both',
          name: 'opacity',
          outputRange: [0, 1],
        },
      ]}>
      <LottieView
        style={{width: '40%'}}
        source={require('@assets/lottie/spinner.json')}
        autoPlay
        loop
      />
    </AnimateItTiming>
  );
};

export default Loading;
