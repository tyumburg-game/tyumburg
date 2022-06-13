"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsGroup = void 0;
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
require("./ButtonsGroup.css");
var b = (0, bem_cn_1.default)("buttons-group");
function ButtonsGroup(props) {
    var _a = props.direction, direction = _a === void 0 ? "horizontal" : _a, className = props.className, children = props.children;
    return React.createElement("div", { className: b({ direction: direction }).mix(className) }, children);
}
exports.ButtonsGroup = ButtonsGroup;
