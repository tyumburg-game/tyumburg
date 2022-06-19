"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserFields = void 0;
function getUserFields(user) {
    var _a, _b, _c, _d, _e, _f;
    return {
        display_name: (_a = user === null || user === void 0 ? void 0 : user.display_name) !== null && _a !== void 0 ? _a : "",
        login: (_b = user === null || user === void 0 ? void 0 : user.login) !== null && _b !== void 0 ? _b : "",
        phone: (_c = user === null || user === void 0 ? void 0 : user.phone) !== null && _c !== void 0 ? _c : "",
        first_name: (_d = user === null || user === void 0 ? void 0 : user.first_name) !== null && _d !== void 0 ? _d : "",
        second_name: (_e = user === null || user === void 0 ? void 0 : user.second_name) !== null && _e !== void 0 ? _e : "",
        email: (_f = user === null || user === void 0 ? void 0 : user.email) !== null && _f !== void 0 ? _f : "",
    };
}
exports.getUserFields = getUserFields;
//# sourceMappingURL=get-user-fields.js.map