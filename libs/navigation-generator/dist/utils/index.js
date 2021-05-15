"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNavigations = exports.generateFolder = exports.getFolderName = void 0;
const fs_1 = __importDefault(require("fs"));
const getFolderName = (p) => {
    const pathArr = p.split('/');
    return pathArr[pathArr.length - 1];
};
exports.getFolderName = getFolderName;
async function generateFolder(folderPath) {
    const exist = fs_1.default.existsSync(folderPath);
    if (!exist) {
        await fs_1.default.mkdir(folderPath, (err) => {
            if (err)
                return console.log(err);
        });
    }
}
exports.generateFolder = generateFolder;
function addNavigations(nav, route, parent = '') {
    const { name, routes } = route;
    nav.push([
        parent ? `${parent}_${name}` : name,
        parent ? `${parent}_${name}` : name,
    ]);
    if (routes) {
        routes.forEach((childRoute) => addNavigations(nav, childRoute, name));
    }
    return;
}
exports.addNavigations = addNavigations;
