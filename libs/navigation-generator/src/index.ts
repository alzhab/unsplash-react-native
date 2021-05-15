import fs from 'fs';
import path from 'path';
import {IRoute} from './types';
import generateNavigation from './generator';

const file = fs
  .readFileSync(path.resolve(__dirname, '../../../app.config.json'))
  .toString();

const data: IRoute[] = JSON.parse(file).navigation;
const modulesPath = path.resolve(__dirname, '../../../src/modules');

generateNavigation(data, modulesPath);
