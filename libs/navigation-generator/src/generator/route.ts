import {IRoute} from '../types';
import path from 'path';
import generateIndexFile from './indexes';
import {generateFolder} from '../utils';

async function generateRoute(route: IRoute, genPath: string) {
  const modulePath = path.join(genPath, route.name);
  const haveChilds = !!route.routes;

  await generateFolder(modulePath);
  await generateIndexFile(modulePath, route.routes, route.type);
  if (haveChilds) {
    for (const childRoute of route.routes) {
      await generateRoute(childRoute, modulePath);
    }
  }

  return;
}

export default generateRoute;
