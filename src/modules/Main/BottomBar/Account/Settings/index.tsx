import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const Settings = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>Settings</Text>
    </Flex>
  );
};

export default Settings;
