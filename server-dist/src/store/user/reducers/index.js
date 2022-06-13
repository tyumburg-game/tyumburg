"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReducer = void 0;
var tslib_1 = require("tslib");
var actions_1 = require("store/user/actions");
var defaultState = {
    status: "failed",
    item: null,
};
function userReducer(state, _a) {
    if (state === void 0) { state = defaultState; }
    var _b = _a === void 0 ? {} : _a, type = _b.type, item = _b.item;
    switch (type) {
        case actions_1.Actions.PENDING:
            return tslib_1.__assign(tslib_1.__assign({}, state), { status: "pending" });
        case actions_1.Actions.SUCCESS:
            return tslib_1.__assign(tslib_1.__assign({}, state), { status: "success" });
        case actions_1.Actions.FAILED:
            return tslib_1.__assign(tslib_1.__assign({}, state), { status: "failed" });
        case actions_1.Actions.SET_USER_ITEM:
            return tslib_1.__assign(tslib_1.__assign({}, state), { item: item });
        default:
            return state;
    }
}
exports.userReducer = userReducer;
