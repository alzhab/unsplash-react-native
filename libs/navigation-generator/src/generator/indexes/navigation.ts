import {BottombarIndexTemplate, StackIndexTemplate} from '../../templates';
import Handlebars from 'handlebars';
import fs from 'fs';
import {IRoute, NavigationsType} from '../../types';

const getNavigationSource = (type: NavigationsType) => {
  switch (type) {
    case NavigationsType.stack:
      return StackIndexTemplate;
    case NavigationsType.bottombar:
      return BottombarIndexTemplate;
  }
};

async function generateNavigationIndex(
  indexFilePath: string,
  routes: IRoute[],
  parent: string,
  type = NavigationsType.stack,
) {
  const source = getNavigationSource(type);

  const template = Handlebars.compile(source);

  const contents = template({routes, parent});

  await fs.writeFile(indexFilePath, contents, (err) => {
    if (err) return console.log(err);
  });
}

export default generateNavigationIndex;
