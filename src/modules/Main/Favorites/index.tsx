import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Favorites = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>Favorites</Text>
    </Flex>
  );
};

export default Favorites;
