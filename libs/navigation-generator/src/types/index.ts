export interface IRoute {
  name: string;
  Icon: string;
  routes?: IRoute[];
  type?: NavigationsType
  title?: string
}

export enum IndexExtension {
  navigation = 'ts',
  screen = 'tsx',
}

export enum NavigationsType {
  stack = 'stack',
  bottombar = 'bottombar',
}
