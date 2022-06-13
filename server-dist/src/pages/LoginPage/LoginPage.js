"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var Button_1 = tslib_1.__importDefault(require("components/Button/Button"));
var ButtonsGroup_1 = require("components/ButtonsGroup/ButtonsGroup");
var CenterPageLayout_1 = require("components/Layouts/CenterPageLayout/CenterPageLayout");
var Input_1 = tslib_1.__importDefault(require("components/Input/Input"));
var paths_1 = require("Routes/paths");
var use_link_1 = require("hooks/use-link");
function LoginPage() {
    var _a = (0, react_1.useState)(""), password = _a[0], setPassword = _a[1];
    var _b = (0, react_1.useState)(""), login = _b[0], setLogin = _b[1];
    var navigate = (0, use_link_1.useLink)();
    return (React.createElement(CenterPageLayout_1.CenterPageLayout, null,
        React.createElement("form", { action: "#", className: "login-page__form" },
            React.createElement(Modal_1.default, { fixed: false },
                React.createElement(Modal_1.default.Header, { title: "\u0412\u0445\u043E\u0434" }),
                React.createElement(Modal_1.default.Content, null,
                    React.createElement(Input_1.default, { onChange: function (event) { return setLogin(event.target.value); }, value: login, label: "\u041B\u043E\u0433\u0438\u043D" }),
                    React.createElement(Input_1.default, { onChange: function (event) { return setPassword(event.target.value); }, type: "password", value: password, label: "\u041F\u0430\u0440\u043E\u043B\u044C" })),
                React.createElement(Modal_1.default.Footer, null,
                    React.createElement(ButtonsGroup_1.ButtonsGroup, null,
                        React.createElement(Button_1.default, { onClick: navigate(paths_1.PATHS.SIGN_UP), mode: "secondary" }, "\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430"),
                        React.createElement(Button_1.default, { mode: "primary", onClick: function () { } }, "\u0412\u043E\u0439\u0442\u0438")))))));
}
exports.LoginPage = LoginPage;
