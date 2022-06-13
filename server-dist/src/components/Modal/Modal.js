"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
var ModalContent_1 = tslib_1.__importDefault(require("./components/ModalContent/ModalContent"));
var ModalFooter_1 = tslib_1.__importDefault(require("./components/ModalFooter/ModalFooter"));
var ModalHeader_1 = tslib_1.__importDefault(require("./components/ModalHeader/ModalHeader"));
require("./Modal.css");
var b = (0, bem_cn_1.default)("modal");
function Modal(props) {
    var children = props.children, _a = props.fixed, fixed = _a === void 0 ? true : _a, className = props.className;
    return (React.createElement("div", { className: b({ fixed: fixed }).mix(className) }, children));
}
exports.default = Modal;
Modal.Header = ModalHeader_1.default;
Modal.Content = ModalContent_1.default;
Modal.Footer = ModalFooter_1.default;
