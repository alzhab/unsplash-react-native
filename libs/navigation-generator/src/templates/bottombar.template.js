"use strict";
exports.__esModule = true;
exports["default"] = "import {Navigations} from '@types';\nimport {BottombarGenerator} from '@utils';\nimport { {{#each routes}}{{this.Icon}},{{/each}} } from '@icons';\n{{#each routes}}\nimport {{this.name}} from './{{this.name}}';\n{{/each}}\n\nconst navigations = [\n  {{#each routes}}\n  {\n    name: Navigations.{{this.name}},\n    component: {{this.name}},\n    Icon: {{this.Icon}}\n  },\n  {{/each}}\n];\n\nexport default BottombarGenerator(navigations);\n";
