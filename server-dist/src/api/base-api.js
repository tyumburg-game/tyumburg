"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAPI = void 0;
var http_transport_1 = require("../http/http-transport");
var BaseAPI = /** @class */ (function () {
    function BaseAPI(path) {
        this.instance = new http_transport_1.HTTPTransport(path);
    }
    return BaseAPI;
}());
exports.BaseAPI = BaseAPI;
//# sourceMappingURL=base-api.js.map