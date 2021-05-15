import React, {memo, ReactElement, useMemo} from 'react';
import {AnimateItTiming, Flex} from '@components';
import {AI, JC} from '@types';
import LottieView from 'lottie-react-native';
import {COLORS} from '@config/base';
import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT} from '@config/mixins';

const Splash = ({show}: { show: boolean }): ReactElement => {
  
  return (
    <AnimateItTiming
      remove
      show={show}
      style={[
        StyleSheet.absoluteFill,
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.BG.MAIN
        },
      ]}
      interpolations={[{
        name: 'translateY',
        outputRange: [WINDOW_HEIGHT, 0],
        dir: 'from'
      }, {
        name: 'opacity',
        outputRange: [0, 1],
        dir: 'both'
      }]}
    >
      <Flex animated
            ai={AI.center}
            jc={JC.center}
            size={1}>
        <LottieView
          style={{
            width: '80%'
          }}
          source={require('@assets/lottie/onboarding-load.json')}
          autoPlay
          loop/>
      </Flex>
    </AnimateItTiming>
  );
};

export default memo(Splash, (prev, next) => prev.show === next.show);
