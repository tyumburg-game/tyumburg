"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var auth_api_1 = require("api/auth/auth-api");
function useAuth() {
    var _a = (0, react_1.useState)("loading"), authState = _a[0], setAuthState = _a[1];
    (0, react_1.useEffect)(function () {
        function checkAuth() {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var user, e_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            setAuthState("loading");
                            return [4 /*yield*/, auth_api_1.authApi.getUser()];
                        case 1:
                            user = _a.sent();
                            if (user) {
                                setAuthState("auth");
                            }
                            else {
                                setAuthState("external");
                            }
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _a.sent();
                            setAuthState("external");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        checkAuth();
    }, [setAuthState]);
    return authState;
}
exports.useAuth = useAuth;
//# sourceMappingURL=use-auth.js.map