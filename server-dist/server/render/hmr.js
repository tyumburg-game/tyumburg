"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
var tslib_1 = require("tslib");
var webpack_1 = tslib_1.__importDefault(require("webpack"));
var webpack_dev_middleware_1 = tslib_1.__importDefault(require("webpack-dev-middleware"));
// @ts-ignore
var webpack_hot_middleware_1 = tslib_1.__importDefault(require("@gatsbyjs/webpack-hot-middleware"));
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
var webpack_common_1 = tslib_1.__importDefault(require("../../../webpack-configs/webpack.common"));
var render_1 = require("./render");
var compiler = (0, webpack_1.default)(tslib_1.__assign(tslib_1.__assign({}, webpack_common_1.default), { mode: "development" }));
exports.middleware = [
    (0, webpack_dev_middleware_1.default)(compiler, {
        serverSideRender: true,
        index: false,
        publicPath: webpack_common_1.default.output.publicPath,
    }),
    (0, webpack_hot_middleware_1.default)(compiler, {
        path: "/__webpack_hmr",
        log: false,
    }),
    render_1.render,
];
