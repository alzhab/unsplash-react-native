import React from 'react';
import {AI, ButtonTypes, JC, TextAlign, TextFamily} from '@types';
import Flex from '../../atoms/Flex';
import {RefreshIcon, SadIcon} from '@icons';
import {COLORS} from '@config/base';
import {Button} from '../../molecules';
import {Text} from '../../atoms';

interface IProps {
  refresh: () => void;
}

const Empty = (props: IProps) => {
  return (
    <Flex ai={AI.center} full size={1}>
      <Flex full size={0.53} ai={AI.center} jc={JC.center}>
        <SadIcon color={COLORS.PRIMARY.MAIN} sizeHeight={150} />
      </Flex>

      <Flex full size={0.53} ai={AI.center}>
        <Text
          textAlign={TextAlign.center}
          styles={{marginBottom: 15}}
          color={COLORS.TEXT.SECOND}
          size={30}
          family={TextFamily.BOLD}>
          Sorry
        </Text>
        <Text
          textAlign={TextAlign.center}
          styles={{marginBottom: 30}}
          size={15}
          color={COLORS.TEXT.SECOND}
          family={TextFamily.SEMIBOLD}>
          We have nothing to show you
        </Text>
      </Flex>

      <Flex full size={1} ai={AI.center} jc={JC.center}>
        <Button
          empty
          styles={{width: 50, height: 50, borderRadius: 50}}
          click={props.refresh}
          type={ButtonTypes.BORDERED}>
          <RefreshIcon color={COLORS.PRIMARY.MAIN} sizeHeight={20} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Empty;
