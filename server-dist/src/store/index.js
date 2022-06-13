"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureStore = void 0;
var tslib_1 = require("tslib");
var redux_1 = require("redux");
var redux_thunk_1 = tslib_1.__importDefault(require("redux-thunk"));
var reducer_1 = require("./reducer");
function configureStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
    var middleware = [redux_thunk_1.default];
    var store = (0, redux_1.createStore)(reducer_1.rootReducer, initialState, composeEnhancers(redux_1.applyMiddleware.apply(void 0, middleware)));
    return store;
}
exports.configureStore = configureStore;
