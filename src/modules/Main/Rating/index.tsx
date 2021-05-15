import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Rating = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>Rating</Text>
    </Flex>
  );
};

export default Rating;
