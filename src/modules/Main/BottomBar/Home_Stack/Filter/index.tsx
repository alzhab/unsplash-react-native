import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Filter = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>Filter</Text>
    </Flex>
  );
};

export default Filter;
