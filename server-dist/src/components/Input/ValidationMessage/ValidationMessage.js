"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
var react_1 = require("react");
require("./ValidationMessage.css");
var b = (0, bem_cn_1.default)("validation-message");
function ValidationMessage(_a) {
    var children = _a.children;
    return React.createElement("div", { className: b() }, children);
}
exports.default = (0, react_1.memo)(ValidationMessage);
//# sourceMappingURL=ValidationMessage.js.map