"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `export enum Navigations {
  {{#each navigations}}
  {{this.[0]}} = "{{this.[1]}}",
  {{/each}}
}
`;
