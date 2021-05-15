"use strict";
exports.__esModule = true;
exports["default"] = "{{#each navigations}}\nexport { default as {{this.name}}{{#if this.isNav}}Navigation{{/if}} } from './{{this.name}}';\n{{/each}}\n";
