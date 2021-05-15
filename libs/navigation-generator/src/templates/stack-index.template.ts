export default `import {Navigations} from '@types';
import {StackGenerator} from '@utils';
{{#each routes}}
import {{this.name}} from './{{this.name}}';
{{/each}}

const navigations = [
  {{#each routes}}
  {
    name: Navigations.{{../parent}}_{{this.name}},
    component: {{this.name}},
  },
  {{/each}}
];

export default StackGenerator(navigations);
`;
