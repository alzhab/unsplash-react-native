"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `{{#each navigations}}
export {default as {{this.exportName}} from './{{this.name}}';
{{/each}}`;
