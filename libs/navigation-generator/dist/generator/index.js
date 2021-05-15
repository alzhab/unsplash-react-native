"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = __importDefault(require("./route"));
const module_1 = __importDefault(require("./indexes/module"));
const utils_1 = require("../utils");
const templates_1 = require("../templates");
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function generateNavEnum(enumPath, navigations) {
    const source = templates_1.NavEnumTemplate;
    const template = handlebars_1.default.compile(source);
    const contents = template({ navigations });
    await fs_1.default.writeFile(enumPath, contents, (err) => {
        if (err)
            return console.log(err);
    });
}
async function generateNavigation(data, genPath) {
    const navigations = [];
    for (const route of data) {
        await route_1.default(route, genPath);
        utils_1.addNavigations(navigations, route);
    }
    await module_1.default(genPath, data);
    await generateNavEnum(path_1.default.resolve(__dirname, '../../../../src/types/enums/navigations.ts'), navigations);
    return;
}
exports.default = generateNavigation;
