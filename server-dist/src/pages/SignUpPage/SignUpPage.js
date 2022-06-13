"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUpPage = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var formik_1 = require("formik");
var validationFields_1 = require("utils/validationFields");
var InputField_1 = tslib_1.__importDefault(require("components/InputField/InputField"));
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var Button_1 = tslib_1.__importDefault(require("components/Button/Button"));
var ButtonsGroup_1 = require("components/ButtonsGroup/ButtonsGroup");
var CenterPageLayout_1 = require("components/Layouts/CenterPageLayout/CenterPageLayout");
var paths_1 = require("Routes/paths");
var CustomLink_1 = tslib_1.__importDefault(require("components/CustomLink/CustomLink"));
function SignUpPage() {
    var inputs = (0, react_1.useState)({
        password: "",
        rePassword: "",
        login: "",
        phone: "",
        firstName: "",
        secondName: "",
        email: "",
    })[0];
    return (React.createElement(CenterPageLayout_1.CenterPageLayout, null,
        React.createElement(formik_1.Formik, { initialValues: inputs, validationSchema: validationFields_1.signUpSchema, onSubmit: function (values) {
                console.log("values", values);
            } },
            React.createElement(formik_1.Form, { className: "sign-up-page__form" },
                React.createElement(Modal_1.default, { fixed: false },
                    React.createElement(Modal_1.default.Header, { title: "\u0420\u0435\u0433\u0438\u0441\u0442\u0430\u0440\u0446\u0438\u044F" }),
                    React.createElement(Modal_1.default.Content, null,
                        React.createElement(InputField_1.default, { type: "text", label: "E-mail", name: "email" }),
                        React.createElement(InputField_1.default, { type: "text", label: "\u041B\u043E\u0433\u0438\u043D", name: "login" }),
                        React.createElement(InputField_1.default, { type: "text", label: "\u0418\u043C\u044F", name: "firstName" }),
                        React.createElement(InputField_1.default, { type: "text", label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", name: "secondName" }),
                        React.createElement(InputField_1.default, { type: "tel", label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", name: "phone" }),
                        React.createElement(InputField_1.default, { type: "password", label: "\u041F\u0430\u0440\u043E\u043B\u044C", name: "password" }),
                        React.createElement(InputField_1.default, { type: "password", label: "\u041F\u043E\u0432\u0442\u043E\u0440 \u043F\u0430\u0440\u043E\u043B\u044F", name: "rePassword" })),
                    React.createElement(Modal_1.default.Footer, null,
                        React.createElement(ButtonsGroup_1.ButtonsGroup, null,
                            React.createElement(CustomLink_1.default, { to: paths_1.PATHS.SIGN_IN, mode: "secondary" }, "\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?"),
                            React.createElement(Button_1.default, { type: "submit", mode: "primary" }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))))))));
}
exports.SignUpPage = SignUpPage;
