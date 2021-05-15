import React from 'react';
import {Flex} from '../../atoms';
import {COLORS} from '@config/base';
import {boxShadow} from '@config/mixins';
import {FlexProps} from '../../atoms/Flex/interface';
import {padding} from '@utils';

interface IProps {
  children: any;
  padding?: {
    top: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

const Card = (props: FlexProps & IProps) => {
  return (
    <Flex
      {...props}
      styles={{
        borderRadius: 4,
        backgroundColor: COLORS.BG.MAIN,
        ...padding(props.padding || {top: 20, right: 16}),
        ...boxShadow(),
        ...props.styles,
      }}>
      {props.children}
    </Flex>
  );
};

export default Card;
