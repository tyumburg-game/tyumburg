"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUser = exports.loadPending = exports.loadFailed = exports.loadSuccess = exports.Actions = void 0;
var Actions;
(function (Actions) {
    Actions["PENDING"] = "PENDING";
    Actions["SUCCESS"] = "SUCCESS";
    Actions["FAILED"] = "FAILED";
    Actions["SET_USER_ITEM"] = "SET_USER_ITEM";
})(Actions = exports.Actions || (exports.Actions = {}));
function loadSuccess() {
    return { type: Actions.SUCCESS };
}
exports.loadSuccess = loadSuccess;
function loadFailed() {
    return { type: Actions.PENDING };
}
exports.loadFailed = loadFailed;
function loadPending() {
    return { type: Actions.PENDING };
}
exports.loadPending = loadPending;
function setUser(user) {
    return { type: Actions.SET_USER_ITEM, item: user };
}
exports.setUser = setUser;
