import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Home = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>Home</Text>
    </Flex>
  );
};

export default Home;
