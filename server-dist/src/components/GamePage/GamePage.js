"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamePage = void 0;
var react_1 = require("react");
var game_1 = require("game/game");
require("./GamePage.css");
function GamePage() {
    var canvasElement = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(false), isGameOver = _a[0], setIsGameOver = _a[1];
    (0, react_1.useEffect)(function () {
        if (!canvasElement.current)
            return;
        var game = new game_1.Game(canvasElement.current, setIsGameOver);
        game.start();
        function onKeyDown(e) {
            if (e.key === "ArrowUp" || e.key === " ") {
                game.rotateTetromino();
            }
            if (e.key === "ArrowDown") {
                game.downTetromino();
            }
            if (e.key === "ArrowLeft") {
                game.moveTetrominoLeft();
            }
            if (e.key === "ArrowRight") {
                game.moveTetrominoRight();
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return function () {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);
    return (React.createElement("div", { className: "game-page" },
        React.createElement("div", { className: "game-page__manage-block" }, "\u0417\u0434\u0435\u0441\u044C \u0431\u0443\u0434\u0443\u0442 \u043A\u043D\u043E\u043F\u043A\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"),
        React.createElement("div", { className: "game-page__canvas-wrapper" },
            React.createElement("canvas", { width: "320", height: "640", className: "game-page__canvas", ref: canvasElement })),
        React.createElement("div", { className: "game-page__statistic" }, isGameOver ? "Game Over" : "Game")));
}
exports.GamePage = GamePage;
