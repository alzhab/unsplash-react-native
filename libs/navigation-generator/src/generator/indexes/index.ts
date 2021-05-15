import path from 'path';
import fs from 'fs';
import generateScreenIndex from './screen';
import generateNavigationIndex from './navigation';
import {IndexExtension, IRoute, NavigationsType} from '../../types';
import {getFolderName} from '../../utils';

async function generateIndexFile(
  folderPath: string,
  routes?: IRoute[] | undefined,
  navigationType = NavigationsType.stack,
) {
  const isScreen = routes === undefined;
  const type = isScreen ? IndexExtension.screen : IndexExtension.navigation;
  const name = getFolderName(folderPath);
  const indexFilePath = path.join(folderPath, `index.${type}`);
  const exist = fs.existsSync(indexFilePath);

  if (!exist) {
    if (isScreen) {
      await generateScreenIndex(indexFilePath, name);
    } else {
      await generateNavigationIndex(
        indexFilePath,
        routes,
        name,
        navigationType,
      );
    }
  }
}

export default generateIndexFile;
