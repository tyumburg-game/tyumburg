"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
function generateKey(args) {
    return args.map(function (arg) { return "".concat(typeof (arg), "<").concat(String(arg), ">"); }).join(',');
}
function memoize(fn) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = generateKey(args);
        var result = cache[key];
        if (result === undefined) {
            result = fn.apply(void 0, args);
            cache[key] = result;
        }
        return result;
    };
}
exports.memoize = memoize;
