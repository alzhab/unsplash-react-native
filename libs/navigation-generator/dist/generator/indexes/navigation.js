"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = require("../../templates");
const handlebars_1 = __importDefault(require("handlebars"));
const fs_1 = __importDefault(require("fs"));
const types_1 = require("../../types");
const getNavigationSource = (type) => {
    switch (type) {
        case types_1.NavigationsType.stack:
            return templates_1.StackIndexTemplate;
        case types_1.NavigationsType.bottombar:
            return templates_1.BottombarIndexTemplate;
    }
};
async function generateNavigationIndex(indexFilePath, routes, parent, type = types_1.NavigationsType.stack) {
    const source = getNavigationSource(type);
    const template = handlebars_1.default.compile(source);
    const contents = template({ routes, parent });
    await fs_1.default.writeFile(indexFilePath, contents, (err) => {
        if (err)
            return console.log(err);
    });
}
exports.default = generateNavigationIndex;
