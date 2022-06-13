"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePage = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var ButtonsGroup_1 = require("components/ButtonsGroup/ButtonsGroup");
var CenterPageLayout_1 = require("components/Layouts/CenterPageLayout/CenterPageLayout");
var Input_1 = tslib_1.__importDefault(require("components/Input/Input"));
var paths_1 = require("Routes/paths");
var CustomLink_1 = tslib_1.__importDefault(require("components/CustomLink/CustomLink"));
function ProfilePage() {
    var _a = (0, react_1.useState)({
        displayName: {
            value: "chickChick",
        },
        login: {
            value: "loginChik",
        },
        phone: {
            value: "+7(999)444-22-44",
        },
        firstName: {
            value: "Chik",
        },
        secondName: {
            value: "Cirik",
        },
        email: {
            value: "chik.chirik@email.com",
        },
    }), inputs = _a[0], setInputs = _a[1];
    function setInput(e) {
        var _a;
        setInputs(tslib_1.__assign(tslib_1.__assign({}, inputs), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    }
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log("Валидация и редактирование профиля.");
    };
    return (React.createElement(CenterPageLayout_1.CenterPageLayout, null,
        React.createElement("form", { action: "#", className: "sign-up-page__form", onSubmit: handleSubmit },
            React.createElement(Modal_1.default, { fixed: false },
                React.createElement(Modal_1.default.Header, { title: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442" }),
                React.createElement(Modal_1.default.Content, null,
                    React.createElement(Input_1.default, { onChange: setInput, value: inputs.email.value, label: "\u041F\u043E\u0447\u0442\u0430", disabled: true, type: "email", name: "email" }),
                    React.createElement(Input_1.default, { onChange: setInput, value: inputs.login.value, label: "\u041B\u043E\u0433\u0438\u043D", disabled: true, name: "login" }),
                    React.createElement(Input_1.default, { onChange: setInput, value: inputs.firstName.value, label: "\u0418\u043C\u044F", disabled: true, name: "firstName" }),
                    React.createElement(Input_1.default, { onChange: setInput, value: inputs.secondName.value, label: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", disabled: true, name: "secondName" }),
                    React.createElement(Input_1.default, { onChange: setInput, value: inputs.displayName.value, label: "\u0418\u043C\u044F \u0432 \u0447\u0430\u0442\u0435", disabled: true, name: "display_name" }),
                    React.createElement(Input_1.default, { onChange: setInput, value: inputs.phone.value, label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", disabled: true, type: "tel", name: "phone" })),
                React.createElement(Modal_1.default.Footer, null,
                    React.createElement(ButtonsGroup_1.ButtonsGroup, { direction: "vertical", className: "buttons-group_align-right" },
                        React.createElement(CustomLink_1.default, { to: paths_1.PATHS.EDIT_PROFILE, mode: "secondary" }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E"),
                        React.createElement(CustomLink_1.default, { to: paths_1.PATHS.PASSWORD_CHANGE, mode: "secondary" }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"),
                        React.createElement(CustomLink_1.default, { to: paths_1.PATHS.START, mode: "dangerous" }, "\u0412\u044B\u0439\u0442\u0438")))))));
}
exports.ProfilePage = ProfilePage;
