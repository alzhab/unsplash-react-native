import {ScreenTemplate} from '../../templates';
import Handlebars from 'handlebars';
import fs from 'fs';

async function generateScreenIndex(indexFilePath: string, name: string) {
  const source = ScreenTemplate;
  const template = Handlebars.compile(source);

  const contents = template({name});

  await fs.writeFile(indexFilePath, contents, (err) => {
    if (err) return console.log(err);
  });
}

export default generateScreenIndex;
