"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
require("./Input.css");
var b = (0, bem_cn_1.default)("input");
function Input(props) {
    var value = props.value, _a = props.type, type = _a === void 0 ? "text" : _a, _b = props.disabled, disabled = _b === void 0 ? false : _b, className = props.className, _c = props.mode, mode = _c === void 0 ? "default" : _c, _d = props.id, id = _d === void 0 ? (0, react_1.useId)() : _d, label = props.label, comment = props.comment, _e = props.name, name = _e === void 0 ? (0, react_1.useId)() : _e, onChange = props.onChange;
    return (React.createElement("div", { className: b.mix(className) },
        React.createElement("label", { htmlFor: id, className: b("label") }, label),
        React.createElement("div", { className: b("field-wrapper", { mode: mode }) },
            React.createElement("input", { value: value, id: id, onChange: onChange, disabled: disabled, type: type, name: name, className: b("field", { mode: mode, disabled: disabled }) })),
        React.createElement("div", { className: b("comment") }, comment !== null && comment !== void 0 ? comment : null)));
}
exports.default = Input;
//# sourceMappingURL=Input.js.map