"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const indexes_1 = __importDefault(require("./indexes"));
const utils_1 = require("../utils");
async function generateRoute(route, genPath) {
    const modulePath = path_1.default.join(genPath, route.name);
    const haveChilds = !!route.routes;
    await utils_1.generateFolder(modulePath);
    await indexes_1.default(modulePath, route.routes, route.type);
    if (haveChilds) {
        for (const childRoute of route.routes) {
            await generateRoute(childRoute, modulePath);
        }
    }
    return;
}
exports.default = generateRoute;
