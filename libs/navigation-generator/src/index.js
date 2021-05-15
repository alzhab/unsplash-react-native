"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var generator_1 = require("./generator");
var file = fs_1["default"]
    .readFileSync(path_1["default"].resolve(__dirname, './test-json.json'))
    .toString();
var data = JSON.parse(file);
var modulesPath = path_1["default"].resolve(__dirname, '../../../src/modules');
generator_1["default"](data, modulesPath).then(function () {
    console.log('generation end');
});
