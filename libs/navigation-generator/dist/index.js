"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generator_1 = __importDefault(require("./generator"));
const file = fs_1.default
    .readFileSync(path_1.default.resolve(__dirname, '../../../app.config.json'))
    .toString();
const data = JSON.parse(file).navigation;
const modulesPath = path_1.default.resolve(__dirname, '../../../src/modules');
generator_1.default(data, modulesPath);
