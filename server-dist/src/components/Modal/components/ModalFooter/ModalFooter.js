"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
require("./ModalFooter.css");
var b = (0, bem_cn_1.default)("modal-footer");
function ModalFooter(props) {
    var children = props.children, className = props.className;
    return React.createElement("div", { className: b.mix(className) }, children);
}
exports.default = ModalFooter;
