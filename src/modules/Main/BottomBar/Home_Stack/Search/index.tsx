import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Search = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>Search</Text>
    </Flex>
  );
};

export default Search;
