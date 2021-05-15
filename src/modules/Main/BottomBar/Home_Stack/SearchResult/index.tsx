import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const SearchResult = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>SearchResult</Text>
    </Flex>
  );
};

export default SearchResult;
