"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authApi = void 0;
var tslib_1 = require("tslib");
var base_api_1 = require("../base-api");
var AuthAPI = /** @class */ (function (_super) {
    tslib_1.__extends(AuthAPI, _super);
    function AuthAPI() {
        return _super.call(this, "/auth") || this;
    }
    AuthAPI.prototype.signUp = function (data) {
        return this.instance.post("/signup", {
            data: data,
        });
    };
    AuthAPI.prototype.signIn = function (data) {
        return this.instance.post("/signin", {
            data: data,
        });
    };
    AuthAPI.prototype.getUser = function () {
        return this.instance.get("/user", {});
    };
    AuthAPI.prototype.logout = function () {
        return this.instance.post("/logout");
    };
    return AuthAPI;
}(base_api_1.BaseAPI));
exports.authApi = new AuthAPI();
//# sourceMappingURL=auth-api.js.map