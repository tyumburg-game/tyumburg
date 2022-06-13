"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootReducer = void 0;
var redux_1 = require("redux");
var reducers_1 = require("./user/reducers");
exports.rootReducer = (0, redux_1.combineReducers)({
    user: reducers_1.userReducer,
});
