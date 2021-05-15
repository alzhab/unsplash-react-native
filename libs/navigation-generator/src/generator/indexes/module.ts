import {IRoute} from '../../types';
import fs from 'fs';
import {ModuleIndexTemplate} from '../../templates';
import Handlebars from 'handlebars';

async function generateModulesIndex(modulePath: string, routes: IRoute[]) {
  const indexPath = modulePath + '/index.tsx';
  const exist = await fs.existsSync(indexPath);
  const navigations = routes.map((route) => ({
    name: route.name,
    exportName: !!route.routes
      ? route.name + 'Navigation' + '}'
      : route.name + '}',
  }));
  const source = ModuleIndexTemplate;
  const template = Handlebars.compile(source);

  const contents = template({navigations}).trim();

  if (exist) {
    const data = await fs.readFileSync(indexPath).toString();
    if (!data.includes(contents)) {
      await fs.appendFile(indexPath, contents, (err) => {
        if (err) return console.log(err);
      });
    }
  } else {
    await fs.writeFile(indexPath, contents, (err) => {
      if (err) return console.log(err);
    });
  }
}

export default generateModulesIndex;
