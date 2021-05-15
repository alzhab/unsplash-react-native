import React from 'react';
import {Props} from './interfaces';
import {AI, DIR, JC} from '@types';
import {horizontalScale} from '@config/mixins';
import {Flex, Text} from '../../atoms';

const Section = (props: Props) => {
  return (
    <Flex
      full
      styles={{
        marginBottom: horizontalScale(props.bottom || 30),
        ...(props.style || {}),
      }}>
      <Flex
        full
        containerHor={props.headerContainer}
        dir={DIR.row}
        ai={AI.center}
        jc={JC.spaceBetween}
        styles={{marginBottom: horizontalScale(props.headerBottom || horizontalScale(17))}}>
        <Text size={18}>{props.title}</Text>

        <Flex>{props.right}</Flex>
      </Flex>

      <Flex full containerHor={props.contentContainer}>
        {props.children}
      </Flex>
    </Flex>
  );
};

export default Section;
