import fs from 'fs';
import {IRoute} from '../types';

export const getFolderName = (p: string) => {
  const pathArr = p.split('/');
  return pathArr[pathArr.length - 1];
};

export async function generateFolder(folderPath: string) {
  const exist = fs.existsSync(folderPath);

  if (!exist) {
    await fs.mkdir(folderPath, (err) => {
      if (err) return console.log(err);
    });
  }
}

export function addNavigations(
  nav: [string, string][],
  route: IRoute,
  parent = '',
) {
  const {name, routes} = route;

  nav.push([
    parent ? `${parent}_${name}` : name,
    parent ? `${parent}_${name}` : name,
  ]);

  if (routes) {
    routes.forEach((childRoute) => addNavigations(nav, childRoute, name));
  }

  return;
}
