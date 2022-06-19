"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
require("./ModalHeader.css");
var b = (0, bem_cn_1.default)("modal-header");
function ModalHeader(props) {
    var children = props.children, title = props.title, className = props.className;
    return (React.createElement("div", { className: b.mix(className) },
        React.createElement("div", { className: "modal-header__title" }, title),
        children));
}
exports.default = ModalHeader;
//# sourceMappingURL=ModalHeader.js.map