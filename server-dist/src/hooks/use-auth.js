"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
function useAuth() {
    var _this = this;
    var _a = (0, react_1.useState)(true), isAuth = _a[0], setIsAuth = _a[1];
    (0, react_1.useEffect)(function () {
        // TODO реализовать при добавлении авторизации
        var checkAuth = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, true];
                    case 1:
                        res = _a.sent();
                        setIsAuth(res);
                        return [2 /*return*/];
                }
            });
        }); };
        checkAuth();
    }, []);
    return isAuth;
}
exports.useAuth = useAuth;
