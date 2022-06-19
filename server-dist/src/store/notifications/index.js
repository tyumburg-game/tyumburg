"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearNotifications = exports.setNotification = exports.notificationsActions = exports.notificationsReducer = exports.notificationsSlice = void 0;
var tslib_1 = require("tslib");
var toolkit_1 = require("@reduxjs/toolkit");
var uuid_1 = require("uuid");
var initialState = {
    items: [],
};
exports.notificationsSlice = (0, toolkit_1.createSlice)({
    name: "notifications",
    initialState: initialState,
    reducers: {
        setNotification: function (state, action) { return (tslib_1.__assign(tslib_1.__assign({}, state), { items: state.items.concat(tslib_1.__assign(tslib_1.__assign({}, action.payload), { id: (0, uuid_1.v4)() })) })); },
        clearNotifications: function (state, action) { return (tslib_1.__assign(tslib_1.__assign({}, state), { items: state.items.filter(function (item) { return item.id !== action.payload; }) })); },
    },
});
exports.notificationsReducer = exports.notificationsSlice.reducer;
exports.notificationsActions = exports.notificationsSlice.actions;
exports.setNotification = exports.notificationsActions.setNotification, exports.clearNotifications = exports.notificationsActions.clearNotifications;
//# sourceMappingURL=index.js.map