"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordChangePage = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var Button_1 = tslib_1.__importDefault(require("components/Button/Button"));
var Input_1 = tslib_1.__importDefault(require("components/Input/Input"));
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var use_link_1 = require("hooks/use-link");
var paths_1 = require("Routes/paths");
var CenterPageLayout_1 = require("components/Layouts/CenterPageLayout/CenterPageLayout");
var ButtonsGroup_1 = require("components/ButtonsGroup/ButtonsGroup");
function PasswordChangePage() {
    var _a = (0, react_1.useState)(""), oldPassword = _a[0], setOldPassword = _a[1];
    var _b = (0, react_1.useState)(""), newPassword = _b[0], setNewPassword = _b[1];
    var _c = (0, react_1.useState)(""), newPasswordRepeat = _c[0], setNewPasswordRepeat = _c[1];
    var navigate = (0, use_link_1.useLink)();
    return (React.createElement(CenterPageLayout_1.CenterPageLayout, null,
        React.createElement(Modal_1.default, { fixed: false },
            React.createElement(Modal_1.default.Header, { title: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C" }),
            React.createElement(Modal_1.default.Content, null,
                React.createElement(Input_1.default, { onChange: function (event) { return setOldPassword(event.target.value); }, value: oldPassword, label: "\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }),
                React.createElement(Input_1.default, { onChange: function (event) { return setNewPassword(event.target.value); }, value: newPassword, label: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" }),
                React.createElement(Input_1.default, { onChange: function (event) { return setNewPasswordRepeat(event.target.value); }, value: newPasswordRepeat, label: "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" })),
            React.createElement(Modal_1.default.Footer, null,
                React.createElement(ButtonsGroup_1.ButtonsGroup, null,
                    React.createElement(Button_1.default, { mode: "secondary", onClick: navigate(paths_1.PATHS.PROFILE) }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"),
                    React.createElement(Button_1.default, { mode: "primary", onClick: function (event) { return console.log("click", event); } }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"))))));
}
exports.PasswordChangePage = PasswordChangePage;
//# sourceMappingURL=PasswordChangePage.js.map