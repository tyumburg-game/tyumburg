"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartGameModal = void 0;
var tslib_1 = require("tslib");
var Button_1 = tslib_1.__importDefault(require("components/Button/Button"));
var ButtonsGroup_1 = require("components/ButtonsGroup/ButtonsGroup");
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
function StartGameModal(props) {
    var isOpen = props.isOpen, handleNewGame = props.handleNewGame;
    return React.createElement(React.Fragment, null, isOpen &&
        React.createElement(Modal_1.default, { className: "game-page__modal" },
            React.createElement(Modal_1.default.Header, { title: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0438\u0433\u0440\u0443 \u0422\u0435\u0442\u0440\u0438\u0441!" }),
            React.createElement(Modal_1.default.Content, null,
                React.createElement("p", { className: "game-page__modal-text" },
                    "\u0412 \u044D\u0442\u043E\u0439 \u0438\u0433\u0440\u0435 \u043D\u0443\u0436\u043D\u043E \u0432\u044B\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0442\u044C \u0440\u044F\u0434\u044B \u0438\u0437 \u043F\u0430\u0434\u0430\u044E\u0449\u0438\u0445 \u0444\u0438\u0433\u0443\u0440. \u0414\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0438:",
                    " "),
                React.createElement("p", { className: "game-page__modal-text" }, "\u25C0\uFE0F\u25B6\uFE0F[\u0441\u0442\u0440\u0435\u043B\u043A\u0438 \u0432\u043B\u0435\u0432\u043E-\u0432\u043F\u0440\u0430\u0432\u043E] - \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0444\u0438\u0433\u0443\u0440\u044B"),
                React.createElement("p", { className: "game-page__modal-text" }, "\uFE0F\uD83D\uDD3C\uFE0F\u23F9\uFE0F\uFE0F[\u0441\u0442\u0440\u0435\u043B\u043A\u0443 \u0432\u0432\u0435\u0440\u0445 \u0438 \u043F\u0440\u043E\u0431\u0435\u043B] - \u0434\u043B\u044F \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430 \u0444\u0438\u0433\u0443\u0440\u044B"),
                React.createElement("p", { className: "game-page__modal-text" }, "\uD83D\uDD3D[\u0441\u0442\u0440\u0435\u043B\u043A\u0443 \u0432\u043D\u0438\u0437] - \u0434\u043B\u044F \u0431\u044B\u0441\u0442\u0440\u043E\u0433\u043E \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0444\u0438\u0433\u0443\u0440\u044B \u0432\u043D\u0438\u0437")),
            React.createElement(Modal_1.default.Footer, null,
                React.createElement(ButtonsGroup_1.ButtonsGroup, null,
                    React.createElement(Button_1.default, { mode: "primary", onClick: handleNewGame }, "\u0421\u0442\u0430\u0440\u0442")))));
}
exports.StartGameModal = StartGameModal;
//# sourceMappingURL=StartGameModal.js.map