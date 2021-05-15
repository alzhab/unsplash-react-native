import React from 'react';
import {Flex, Image, Text} from '@components';
import {AI, JC, TextAlign, TextFamily} from '@types';
import {horizontalScale} from '@config/mixins';
import {COLORS} from '@config/base';
import {Source} from 'react-native-fast-image';

export interface ISlide {
  image: Source | number;
  title: string;
  text: string;
}

interface IProps {
  data: ISlide;
}

const Slide = (props: IProps) => {
  return (
    <Flex size={1} full containerHor styles={{backgroundColor: COLORS.BG.MAIN}}>
      <Flex full size={1} ai={AI.center} jc={JC.center}>
        <Image resizeMode={'contain'} source={props.data.image} />
      </Flex>
      <Flex full size={0.52} ai={AI.center} jc={JC.center}>
        <Text
          styles={{paddingBottom: horizontalScale(15)}}
          textAlign={TextAlign.center}
          size={20}
          family={TextFamily.SEMIBOLD}
          color={COLORS.PRIMARY.MAIN}>
          {props.data.title}
        </Text>

        <Text
          textAlign={TextAlign.center}
          color={COLORS.TEXT.SECOND}
          lineHeight={22}>
          {props.data.text}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Slide;
