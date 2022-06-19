"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUEUE_SIZE = exports.PLAYFIELD_SIZE = exports.LEVEL_SCORE = exports.SPEED_STEP = exports.DEFAULT_SPEED = exports.GRID_SIZE = exports.TETROMINOES_COLORS = exports.TETROMINOES = void 0;
exports.TETROMINOES = {
    I: [
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ],
    J: [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
    L: [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0],
    ],
    O: [
        [1, 1],
        [1, 1],
    ],
    S: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
    ],
    Z: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
    ],
    T: [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0],
    ],
};
exports.TETROMINOES_COLORS = {
    I: "#8338EC",
    O: "#F4976C",
    T: "#FBE8A6",
    S: "#FFBE0B",
    Z: "#FF006E",
    J: "#D2FDFF",
    L: "#303C6C",
};
exports.GRID_SIZE = 32;
exports.DEFAULT_SPEED = 500;
exports.SPEED_STEP = 50;
exports.LEVEL_SCORE = 30;
exports.PLAYFIELD_SIZE = {
    cols: 10,
    rows: 20,
};
exports.QUEUE_SIZE = 2;
//# sourceMappingURL=contants.js.map