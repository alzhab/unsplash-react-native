export default `export enum Navigations {
  {{#each navigations}}
  {{this.[0]}} = "{{this.[1]}}",
  {{/each}}
}
`
