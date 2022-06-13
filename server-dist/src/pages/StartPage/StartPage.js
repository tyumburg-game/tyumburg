"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartPage = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var Button_1 = tslib_1.__importDefault(require("components/Button/Button"));
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var paths_1 = require("Routes/paths");
var use_link_1 = require("hooks/use-link");
require("./StartPage.css");
function StartPage() {
    var menuItems = (0, react_1.useState)([
        { label: "Играть", url: paths_1.PATHS.GAME },
        { label: "Профиль", url: paths_1.PATHS.PROFILE },
        { label: "Логин", url: paths_1.PATHS.SIGN_IN },
        { label: "Регистрация", url: paths_1.PATHS.SIGN_UP },
        { label: "Таблица лидеров", url: paths_1.PATHS.LEADERBOARD },
        { label: "Форум", url: paths_1.PATHS.FORUM },
        { label: "Компоненты", url: paths_1.PATHS.UI },
    ])[0];
    var navigate = (0, use_link_1.useLink)();
    return (React.createElement(Modal_1.default, null,
        React.createElement(Modal_1.default.Header, { title: "\u041C\u0435\u043D\u044E" }),
        React.createElement(Modal_1.default.Content, null,
            React.createElement("div", { className: "main-menu" }, menuItems.map(function (item) { return (React.createElement(Button_1.default, { mode: "secondary", className: "main-menu__btn", onClick: navigate(item.url), key: item.url }, item.label)); })))));
}
exports.StartPage = StartPage;
