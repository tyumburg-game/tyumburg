"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
require("./CustomLink.css");
var react_router_dom_1 = require("react-router-dom");
var b = (0, bem_cn_1.default)("custom-link");
function CustomLink(props) {
    var _a = props.mode, mode = _a === void 0 ? "secondary" : _a, _b = props.className, className = _b === void 0 ? "" : _b, to = props.to, children = props.children;
    return (React.createElement(react_router_dom_1.Link, { className: b({ mode: mode }).mix(className), to: to }, children));
}
exports.default = CustomLink;
