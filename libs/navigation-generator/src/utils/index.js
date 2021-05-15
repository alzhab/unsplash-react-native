"use strict";
exports.__esModule = true;
exports.getFolderName = void 0;
exports.getFolderName = function (p) {
    var pathArr = p.split('/');
    return pathArr[pathArr.length - 1];
};
