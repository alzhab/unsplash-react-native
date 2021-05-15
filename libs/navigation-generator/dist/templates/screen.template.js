"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import React from 'react';
import {Flex, Text} from '@components';
import {AI, JC} from '@types';

const {{name}} = () => {
  return (
    <Flex size={1} full ai={AI.center} jc={JC.center}>
      <Text>{{name}}</Text>
    </Flex>
  );
};

export default {{name}};
`;
