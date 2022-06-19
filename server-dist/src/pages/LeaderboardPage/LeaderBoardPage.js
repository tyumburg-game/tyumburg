"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardPage = void 0;
var tslib_1 = require("tslib");
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var paths_1 = require("Routes/paths");
var CustomLink_1 = tslib_1.__importDefault(require("components/CustomLink/CustomLink"));
require("./LeaderboardPage.css");
function LeaderboardPage() {
    var data = [
        { login: "u1", firstName: "Вася", secondName: "Иванов", score: 650 },
        { login: "u2", firstName: "Петя", secondName: "Егоров", score: 550 },
        { login: "u3", firstName: "Слава", secondName: "Слава", score: 450 },
        { login: "u4", firstName: "Марина", secondName: "Ильина", score: 250 },
        { login: "u5", firstName: "Даша", secondName: "Малинова", score: 350 },
        { login: "u6", firstName: "Настя", secondName: "Красная", score: 240 },
        { login: "u7", firstName: "Семен", secondName: "Черный", score: 150 },
    ];
    return (React.createElement(Modal_1.default, null,
        React.createElement(Modal_1.default.Header, { title: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 \u043B\u0438\u0434\u0435\u0440\u043E\u0432" }),
        React.createElement(Modal_1.default.Content, null,
            React.createElement("div", { className: "main-menu leaderboard-wrapper" },
                React.createElement("table", { className: "leaderboard-table" },
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u041C\u0435\u0441\u0442\u043E"),
                        React.createElement("th", null, "\u0418\u043C\u044F"),
                        React.createElement("th", null, "\u0421\u0447\u0435\u0442")),
                    data.map(function (player, index) {
                        return React.createElement("tr", { key: player.login },
                            React.createElement("td", null, index + 1),
                            React.createElement("td", null, "".concat(player.firstName, " ").concat(player.secondName)),
                            React.createElement("td", null, player.score));
                    })))),
        React.createElement(Modal_1.default.Footer, { className: "buttons-group_align-right" },
            React.createElement(CustomLink_1.default, { to: paths_1.PATHS.START, mode: "primary" }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"))));
}
exports.LeaderboardPage = LeaderboardPage;
//# sourceMappingURL=LeaderBoardPage.js.map