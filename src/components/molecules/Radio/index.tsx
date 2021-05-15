import React from 'react';
import {Flex, Text} from '../../atoms';
import {AI, DIR} from '@types';
import {TouchableOpacity} from 'react-native';
import {horizontalScale} from '@config/mixins';
import {COLORS} from '@config/base';
import {FlexProps} from '../../atoms/Flex/interface';

interface IProps {
  checked: boolean;
  click: () => void;
  label: string;
}

const Radio = (props: FlexProps & IProps) => {
  return (
    <TouchableOpacity onPress={props.click}>
      <Flex dir={DIR.row} ai={AI.center} {...props}>
        <Flex
          styles={{
            width: horizontalScale(20),
            height: horizontalScale(20),
            borderRadius: horizontalScale(20),
            backgroundColor: props.checked
              ? COLORS.PRIMARY.MAIN
              : COLORS.TEXT.SECOND,
            marginRight: horizontalScale(12),
          }}
        />
        <Text size={16}>{props.label}</Text>
      </Flex>
    </TouchableOpacity>
  );
};

export default Radio;
