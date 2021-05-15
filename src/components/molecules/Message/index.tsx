import React from 'react';
import {WINDOW_WIDTH} from '@config/mixins';
import {CONTAINER_HOR_PADDING} from '@config/spacing';
import {AI, JC} from '@types';
import {Props} from './interface';
import {AnimateItTiming, Flex, Text} from '../../atoms';
import {COLORS} from '@config/base';
import {NoticeTypeEnum} from '../../../stores/NoticeMessageStore';

const Message = (props: Props) => {
  return (
    <AnimateItTiming
      style={{
        position: 'absolute',
        bottom: 0,
        left: CONTAINER_HOR_PADDING,
      }}
      show={props.show}
      interpolations={[
        {
          name: 'translateY',
          outputRange: [60, -40],
          dir: 'both',
        },
      ]}>
      {!!props.text.length && (
        <Flex
          styles={{
            width: WINDOW_WIDTH - CONTAINER_HOR_PADDING * 2,
            backgroundColor:
              props.type === NoticeTypeEnum.success
                ? COLORS.OTHER.SUCCESS
                : COLORS.OTHER.ERROR,
            borderRadius: 10,
            height: 40,
          }}
          ai={AI.center}
          jc={JC.center}>
          <Text color={COLORS.TEXT.TRETIARY}>{props.text}</Text>
        </Flex>
      )}
    </AnimateItTiming>
  );
};

export default Message;
