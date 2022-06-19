"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOverModal = void 0;
var tslib_1 = require("tslib");
var Button_1 = tslib_1.__importDefault(require("components/Button/Button"));
var ButtonsGroup_1 = require("components/ButtonsGroup/ButtonsGroup");
var CustomLink_1 = tslib_1.__importDefault(require("components/CustomLink/CustomLink"));
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var paths_1 = require("Routes/paths");
function GameOverModal(props) {
    var score = props.score, isOpen = props.isOpen, handleNewGame = props.handleNewGame;
    return React.createElement(React.Fragment, null, isOpen &&
        React.createElement(Modal_1.default, { className: "game-page__modal" },
            React.createElement(Modal_1.default.Header, { title: "\u0418\u0433\u0440\u0430 \u043E\u043A\u043E\u043D\u0447\u0435\u043D\u0430!" }),
            React.createElement(Modal_1.default.Content, null,
                React.createElement("p", { className: "game-page__modal-text" },
                    "\u0412\u0430\u0448 \u0441\u0447\u0451\u0442: ",
                    score)),
            React.createElement(Modal_1.default.Footer, null,
                React.createElement(ButtonsGroup_1.ButtonsGroup, null,
                    React.createElement(Button_1.default, { mode: "primary", onClick: handleNewGame }, "\u0417\u0430\u043D\u043E\u0432\u043E"),
                    React.createElement(CustomLink_1.default, { to: paths_1.PATHS.START, mode: "secondary" }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E")))));
}
exports.GameOverModal = GameOverModal;
;
//# sourceMappingURL=GameOverModal.js.map