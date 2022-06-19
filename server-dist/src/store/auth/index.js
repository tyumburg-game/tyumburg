"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUser = exports.authActions = exports.authReducer = exports.authSlice = exports.register = exports.signIn = exports.logout = void 0;
var tslib_1 = require("tslib");
var toolkit_1 = require("@reduxjs/toolkit");
var user_1 = require("../user");
var auth_api_1 = require("../../api/auth/auth-api");
var initialState = {
    user: null,
};
exports.logout = (0, toolkit_1.createAsyncThunk)("auth/logout", function (_, _a) {
    var rejectWithValue = _a.rejectWithValue;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, auth_api_1.authApi.logout()];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [2 /*return*/, rejectWithValue("Unable to logout")];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.signIn = (0, toolkit_1.createAsyncThunk)("auth/signIn", function (data, _a) {
    var dispatch = _a.dispatch, rejectWithValue = _a.rejectWithValue;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, auth_api_1.authApi.signIn(data)];
                case 1:
                    _b.sent();
                    dispatch((0, user_1.fetchUser)());
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    console.error(error_2);
                    return [2 /*return*/, rejectWithValue(error_2.message)];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.register = (0, toolkit_1.createAsyncThunk)("auth/register", function (data, _a) {
    var rejectWithValue = _a.rejectWithValue;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, auth_api_1.authApi.signUp(data)];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    console.error(error_3);
                    return [2 /*return*/, rejectWithValue(error_3.message)];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.authSlice = (0, toolkit_1.createSlice)({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser: function (state, action) { return (tslib_1.__assign(tslib_1.__assign({}, state), { user: action.payload })); },
    },
    extraReducers: function (builder) {
        builder.addCase(exports.logout.fulfilled, function (state) { return (tslib_1.__assign(tslib_1.__assign({}, state), { user: null })); });
        builder.addCase(exports.logout.rejected, function (state) { return (tslib_1.__assign(tslib_1.__assign({}, state), { user: null })); });
    },
});
exports.authReducer = exports.authSlice.reducer;
exports.authActions = exports.authSlice.actions;
exports.setUser = exports.authActions.setUser;
//# sourceMappingURL=index.js.map