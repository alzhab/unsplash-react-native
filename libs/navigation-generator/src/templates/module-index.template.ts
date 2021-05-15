export default `{{#each navigations}}
export {default as {{this.exportName}} from './{{this.name}}';
{{/each}}`;
