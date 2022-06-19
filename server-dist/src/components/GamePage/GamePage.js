"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePage = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var game_1 = require("game/game");
require("./GamePage.css");
var Button_1 = tslib_1.__importDefault(require("components/Button/Button"));
var GameOverModal_1 = require("./components/GameOverModal");
var StartGameModal_1 = require("./components/StartGameModal");
function GamePage() {
    var canvasElement = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isGameOver = _a[0], setIsGameOver = _a[1];
    var _b = (0, react_1.useState)(true), isStartGameOpen = _b[0], setIsStartGameOpen = _b[1];
    var _c = (0, react_1.useState)(1), level = _c[0], setLevel = _c[1];
    var _d = (0, react_1.useState)(0), score = _d[0], setScore = _d[1];
    var _e = (0, react_1.useState)(), currentGame = _e[0], setCurrentGame = _e[1];
    var onStopGame = function () {
        currentGame === null || currentGame === void 0 ? void 0 : currentGame.stopGame();
    };
    var onPauseGame = function () {
        currentGame === null || currentGame === void 0 ? void 0 : currentGame.switchPause();
    };
    var newGame = function () {
        if (!canvasElement.current)
            return;
        var game = new game_1.Game(canvasElement.current, setIsGameOver, setLevel, setScore);
        game.start();
        setCurrentGame(game);
        setIsGameOver(false);
        setScore(0);
        setLevel(1);
    };
    var onStartGame = function () {
        newGame();
        setIsStartGameOpen(false);
    };
    (0, react_1.useEffect)(function () {
        if (!currentGame)
            return;
        function onKeyDown(e) {
            if (e.key === "ArrowUp" || e.key === " ") {
                currentGame === null || currentGame === void 0 ? void 0 : currentGame.rotateTetromino();
            }
            if (e.key === "ArrowDown") {
                currentGame === null || currentGame === void 0 ? void 0 : currentGame.downTetromino();
            }
            if (e.key === "ArrowLeft") {
                currentGame === null || currentGame === void 0 ? void 0 : currentGame.moveTetrominoLeft();
            }
            if (e.key === "ArrowRight") {
                currentGame === null || currentGame === void 0 ? void 0 : currentGame.moveTetrominoRight();
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return function () {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [currentGame]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "game-page" },
            React.createElement("div", { className: "game-page__manage-block" },
                React.createElement(Button_1.default, { mode: "primary", onClick: onStopGame }, "\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C"),
                React.createElement(Button_1.default, { onClick: onPauseGame }, "\u041F\u0430\u0443\u0437\u0430")),
            React.createElement("div", { className: "game-page__canvas-wrapper" },
                React.createElement("canvas", { width: "320", height: "640", className: "game-page__canvas", ref: canvasElement })),
            React.createElement("div", { className: "game-page__statistic" },
                React.createElement("div", { className: "game-page__statistic-item" },
                    "\u0421\u0447\u0435\u0442: ",
                    score),
                React.createElement("div", { className: "game-page__statistic-item" },
                    "\u0423\u0440\u043E\u0432\u0435\u043D\u044C: ",
                    level))),
        React.createElement(GameOverModal_1.GameOverModal, { isOpen: isGameOver, handleNewGame: newGame, score: score }),
        React.createElement(StartGameModal_1.StartGameModal, { isOpen: isStartGameOpen, handleNewGame: onStartGame })));
}
exports.GamePage = GamePage;
//# sourceMappingURL=GamePage.js.map