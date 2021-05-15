export default `import {Navigations} from '@types';
import {BottombarGenerator} from '@utils';
import { {{#each routes}}{{this.Icon}}{{#unless @last}}, {{/unless}}{{/each}} } from '@icons';
{{#each routes}}
import {{this.name}} from './{{this.name}}';
{{/each}}

const navigations = [
  {{#each routes}}
  {
    name: Navigations.{{../parent}}_{{this.name}},
    component: {{this.name}},
    Icon: {{this.Icon}},
    title: '{{this.title}}'
  },
  {{/each}}
];

export default BottombarGenerator(navigations);
`;
