import React from 'react';
import {Flex, Text} from '../../atoms';
import {AI, DIR, JC} from '@types';
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
      <Flex dir={DIR.row} ai={AI.center} jc={JC.spaceBetween} {...props}>
        <Text size={16}>{props.label}</Text>
        <Flex
          styles={{
            width: horizontalScale(20),
            height: horizontalScale(20),
            borderRadius: horizontalScale(3),
            backgroundColor: props.checked
              ? COLORS.PRIMARY.MAIN
              : COLORS.BG.SECOND,
          }}
        />
      </Flex>
    </TouchableOpacity>
  );
};

export default Radio;
