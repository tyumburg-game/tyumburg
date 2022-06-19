"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var formik_1 = require("formik");
var Input_1 = tslib_1.__importDefault(require("components/Input/Input"));
require("../Input/ValidationMessage/ValidationMessage.css");
function InputField(props) {
    var _a = props.type, type = _a === void 0 ? "text" : _a, className = props.className, _b = props.id, id = _b === void 0 ? (0, react_1.useId)() : _b, label = props.label, name = props.name;
    return (React.createElement(formik_1.Field, { name: name }, function (_a) {
        var field = _a.field, _b = name, errorName = _a.form.errors[_b];
        var mode = errorName ? "error" : "default";
        var errorMsg = errorName ? errorName.toString() : "";
        return (React.createElement(Input_1.default, { label: label, id: id, mode: mode, value: field.value, name: field.name, className: className, type: type, onChange: field.onChange, comment: React.createElement("div", { className: "validation-message" }, errorMsg) }));
    }));
}
exports.default = InputField;
//# sourceMappingURL=InputField.js.map