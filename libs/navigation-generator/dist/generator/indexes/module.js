"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const templates_1 = require("../../templates");
const handlebars_1 = __importDefault(require("handlebars"));
async function generateModulesIndex(modulePath, routes) {
    const indexPath = modulePath + '/index.tsx';
    const exist = await fs_1.default.existsSync(indexPath);
    const navigations = routes.map((route) => ({
        name: route.name,
        exportName: !!route.routes
            ? route.name + 'Navigation' + '}'
            : route.name + '}',
    }));
    const source = templates_1.ModuleIndexTemplate;
    const template = handlebars_1.default.compile(source);
    const contents = template({ navigations }).trim();
    if (exist) {
        const data = await fs_1.default.readFileSync(indexPath).toString();
        if (!data.includes(contents)) {
            await fs_1.default.appendFile(indexPath, contents, (err) => {
                if (err)
                    return console.log(err);
            });
        }
    }
    else {
        await fs_1.default.writeFile(indexPath, contents, (err) => {
            if (err)
                return console.log(err);
        });
    }
}
exports.default = generateModulesIndex;
