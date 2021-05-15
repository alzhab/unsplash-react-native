"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../../templates");
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
async function generateScreenIndex(indexFilePath, name) {
    const source = templates_1.ScreenTemplate;
    const template = handlebars_1.default.compile(source);
    const contents = template({ name });
    await fs_1.default.writeFile(indexFilePath, contents, (err) => {
        if (err)
            return console.log(err);
    });
}
exports.default = generateScreenIndex;
