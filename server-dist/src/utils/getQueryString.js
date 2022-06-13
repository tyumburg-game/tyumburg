"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryString = void 0;
function getQueryString(data) {
    var result = [];
    if (data && Object.keys(data).length) {
        result.push("?");
        Object.keys(data).forEach(function (key) {
            result.push("".concat(key, "=").concat(data[key].toString()));
        });
    }
    return result.join("&");
}
exports.getQueryString = getQueryString;
