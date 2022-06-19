"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.createStore = exports.isServer = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var user_1 = require("./user");
var auth_1 = require("./auth");
var notifications_1 = require("./notifications");
exports.isServer = !(typeof window !== "undefined" &&
    window.document &&
    window.document.createElement);
function createStore(initialState) {
    if (initialState === void 0) { initialState = {}; }
    var preloadedState = (!exports.isServer && window.__INITIAL_STATE__) || initialState;
    return (0, toolkit_1.configureStore)({
        reducer: {
            auth: auth_1.authReducer,
            user: user_1.userReducer,
            notifications: notifications_1.notificationsReducer,
        },
        preloadedState: preloadedState,
    });
}
exports.createStore = createStore;
exports.store = createStore();
//# sourceMappingURL=index.js.map