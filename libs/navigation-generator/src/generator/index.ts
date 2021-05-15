import {IRoute} from '../types';
import generateRoute from './route';
import generateModulesIndex from './indexes/module';
import {addNavigations} from '../utils';
import {NavEnumTemplate} from '../templates';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';

async function generateNavEnum(
  enumPath: string,
  navigations: [string, string][],
) {
  const source = NavEnumTemplate;
  const template = Handlebars.compile(source);

  const contents = template({navigations});

  await fs.writeFile(enumPath, contents, (err) => {
    if (err) return console.log(err);
  });
}

async function generateNavigation(data: IRoute[], genPath: string) {
  const navigations: [string, string][] = [];

  for (const route of data) {
    await generateRoute(route, genPath);
    addNavigations(navigations, route);
  }

  await generateModulesIndex(genPath, data);
  await generateNavEnum(
    path.resolve(__dirname, '../../../../src/types/enums/navigations.ts'),
    navigations,
  );

  return;
}

export default generateNavigation;
