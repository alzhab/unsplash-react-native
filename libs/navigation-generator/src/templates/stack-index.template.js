"use strict";
exports.__esModule = true;
exports["default"] = "import {Navigations} from '@types';\nimport {StackGenerator} from '@utils';\n{{#each routes}}\nimport {{this.name}} from './{{this.name}}';\n{{/each}}\n\nconst navigations = [\n  {{#each routes}}\n  {\n    name: Navigations.{{this.name}},\n    component: {{this.name}},\n  },\n  {{/each}}\n];\n\nexport default StackGenerator(navigations);\n";
