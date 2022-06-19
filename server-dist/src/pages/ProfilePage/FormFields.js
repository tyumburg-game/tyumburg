"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFields = void 0;
var tslib_1 = require("tslib");
var lodash_1 = require("lodash");
var Input_1 = tslib_1.__importDefault(require("components/Input/Input"));
function FormFields(props) {
    var inputs = props.inputs;
    return (React.createElement(React.Fragment, null,
        React.createElement(Input_1.default, { onChange: lodash_1.noop, value: inputs.email, label: "\u041F\u043E\u0447\u0442\u0430", disabled: true, type: "email", name: "email" }),
        React.createElement(Input_1.default, { onChange: lodash_1.noop, value: inputs.login, label: "\u041B\u043E\u0433\u0438\u043D", disabled: true, name: "login" }),
        React.createElement(Input_1.default, { onChange: lodash_1.noop, value: inputs.first_name, label: "\u0418\u043C\u044F", disabled: true, name: "firstName" }),
        React.createElement(Input_1.default, { onChange: lodash_1.noop, value: inputs.second_name, label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", disabled: true, name: "secondName" }),
        React.createElement(Input_1.default, { onChange: lodash_1.noop, value: inputs.display_name, label: "\u0418\u043C\u044F \u0432 \u0447\u0430\u0442\u0435", disabled: true, name: "display_name" }),
        React.createElement(Input_1.default, { onChange: lodash_1.noop, value: inputs.phone, label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", disabled: true, type: "tel", name: "phone" })));
}
exports.FormFields = FormFields;
//# sourceMappingURL=FormFields.js.map