import React from 'react';
import {COLORS} from '@config/base';
import {Flex, Text} from '../../atoms';
import {InputContainerProps} from './interfaces';
import {styles} from './styles';

const InputContainer = (props: InputContainerProps) => {
  return (
    <Flex styles={[styles.inputBox]}>
      {props.children}

      {props.help && !props.error ? (
        <Text
          styles={{bottom: -25, position: 'absolute'}}
          size={12}
          color={COLORS.TEXT.SECOND}>
          {props.help}
        </Text>
      ) : null}

      {props.error ? (
        <Text
          styles={{bottom: -25, position: 'absolute'}}
          size={12}
          color={COLORS.OTHER.ERROR}>
          {props.error}
        </Text>
      ) : null}
    </Flex>
  );
};

export default InputContainer;
