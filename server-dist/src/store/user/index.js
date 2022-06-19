"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUser = exports.userReducer = exports.userSlice = exports.fetchUser = void 0;
var tslib_1 = require("tslib");
var toolkit_1 = require("@reduxjs/toolkit");
var auth_api_1 = require("../../api/auth/auth-api");
var initialState = {
    user: null,
    status: "idle",
    error: null,
};
exports.fetchUser = (0, toolkit_1.createAsyncThunk)("user/fetchUser", function (_, _a) {
    var rejectWithValue = _a.rejectWithValue;
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, auth_api_1.authApi.getUser()];
                case 1: return [2 /*return*/, _b.sent()];
                case 2:
                    error_1 = _b.sent();
                    console.error(error_1);
                    return [2 /*return*/, rejectWithValue(error_1.message)];
                case 3: return [2 /*return*/];
            }
        });
    });
});
exports.userSlice = (0, toolkit_1.createSlice)({
    name: "user",
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(exports.fetchUser.pending, function (state) { return (tslib_1.__assign(tslib_1.__assign({}, state), { status: "loading" })); })
            .addCase(exports.fetchUser.fulfilled, function (state, action) { return (tslib_1.__assign(tslib_1.__assign({}, state), { status: "succeeded", user: action.payload })); })
            .addCase(exports.fetchUser.rejected, function (state, action) {
            var _a;
            return (tslib_1.__assign(tslib_1.__assign({}, state), { status: "failed", error: (_a = action.error.message) !== null && _a !== void 0 ? _a : null }));
        });
    },
});
exports.userReducer = exports.userSlice.reducer;
var selectUser = function (state) { return state.user; };
exports.selectUser = selectUser;
//# sourceMappingURL=index.js.map