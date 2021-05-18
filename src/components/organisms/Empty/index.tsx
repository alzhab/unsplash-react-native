import React from 'react';
import {AI, JC, TextAlign, TextFamily} from '@types';
import Flex from '../../atoms/Flex';
import {SadIcon} from '@icons';
import {Text} from '@components';
import {COLORS} from '@config/base';

const Empty = () => {
  return (
    <Flex ai={AI.center} full size={1}>
      <Flex full size={1} ai={AI.center} jc={JC.center}>
        <SadIcon color={COLORS.TEXT.TRETIARY} sizeHeight={150} />
      </Flex>

      <Flex full size={1} ai={AI.center}>
        <Text
          textAlign={TextAlign.center}
          styles={{marginBottom: 15}}
          color={COLORS.TEXT.MAIN}
          size={30}
          family={TextFamily.BOLD}>
          Empty!
        </Text>
        <Text
          textAlign={TextAlign.center}
          styles={{marginBottom: 30}}
          size={15}
          color={COLORS.TEXT.MAIN}
          family={TextFamily.SEMIBOLD}>
          We have nothing to show you
        </Text>
      </Flex>
    </Flex>
  );
};

export default Empty;
