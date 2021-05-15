"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavEnumTemplate = exports.BottombarIndexTemplate = exports.StackIndexTemplate = exports.ModuleIndexTemplate = exports.ScreenTemplate = void 0;
var screen_template_1 = require("./screen.template");
Object.defineProperty(exports, "ScreenTemplate", { enumerable: true, get: function () { return __importDefault(screen_template_1).default; } });
var module_index_template_1 = require("./module-index.template");
Object.defineProperty(exports, "ModuleIndexTemplate", { enumerable: true, get: function () { return __importDefault(module_index_template_1).default; } });
var stack_index_template_1 = require("./stack-index.template");
Object.defineProperty(exports, "StackIndexTemplate", { enumerable: true, get: function () { return __importDefault(stack_index_template_1).default; } });
var bottombar_template_1 = require("./bottombar.template");
Object.defineProperty(exports, "BottombarIndexTemplate", { enumerable: true, get: function () { return __importDefault(bottombar_template_1).default; } });
var nav_enum_template_1 = require("./nav-enum.template");
Object.defineProperty(exports, "NavEnumTemplate", { enumerable: true, get: function () { return __importDefault(nav_enum_template_1).default; } });
