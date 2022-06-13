"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
require("./Button.css");
var b = (0, bem_cn_1.default)("button");
function Button(props) {
    var _a = props.type, type = _a === void 0 ? "button" : _a, _b = props.mode, mode = _b === void 0 ? "secondary" : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, className = props.className, children = props.children, onClick = props.onClick;
    return (React.createElement("button", { onClick: onClick, type: type, disabled: disabled, className: b({ mode: mode }).mix(className) }, children));
}
exports.default = Button;
