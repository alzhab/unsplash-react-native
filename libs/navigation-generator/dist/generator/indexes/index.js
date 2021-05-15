"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const screen_1 = __importDefault(require("./screen"));
const navigation_1 = __importDefault(require("./navigation"));
const types_1 = require("../../types");
const utils_1 = require("../../utils");
async function generateIndexFile(folderPath, routes, navigationType = types_1.NavigationsType.stack) {
    const isScreen = routes === undefined;
    const type = isScreen ? types_1.IndexExtension.screen : types_1.IndexExtension.navigation;
    const name = utils_1.getFolderName(folderPath);
    const indexFilePath = path_1.default.join(folderPath, `index.${type}`);
    const exist = fs_1.default.existsSync(indexFilePath);
    if (!exist) {
        if (isScreen) {
            await screen_1.default(indexFilePath, name);
        }
        else {
            await navigation_1.default(indexFilePath, routes, name, navigationType);
        }
    }
}
exports.default = generateIndexFile;
