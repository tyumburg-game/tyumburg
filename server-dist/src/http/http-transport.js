"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPTransport = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var env_1 = require("../constants/env");
var http_transport_types_1 = require("./http-transport-types");
axios_1.default.defaults.withCredentials = true;
var HTTPTransport = /** @class */ (function () {
    function HTTPTransport(path, baseUrl) {
        if (path === void 0) { path = ""; }
        if (baseUrl === void 0) { baseUrl = env_1.env.HOST_API; }
        this.path = path;
        this.baseUrl = baseUrl;
    }
    HTTPTransport.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, tslib_1.__assign(tslib_1.__assign({}, options), { method: http_transport_types_1.METHODS.GET }));
    };
    HTTPTransport.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, tslib_1.__assign(tslib_1.__assign({}, options), { method: http_transport_types_1.METHODS.POST }));
    };
    HTTPTransport.prototype.put = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, tslib_1.__assign(tslib_1.__assign({}, options), { method: http_transport_types_1.METHODS.PUT }));
    };
    HTTPTransport.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, tslib_1.__assign(tslib_1.__assign({}, options), { method: http_transport_types_1.METHODS.DELETE }));
    };
    HTTPTransport.prototype.request = function (url, options) {
        var method = options.method, query = options.query, data = options.data, headers = options.headers;
        return (0, axios_1.default)({
            url: "".concat(this.baseUrl).concat(this.path).concat(url),
            data: data,
            method: method,
            headers: headers,
            params: query,
        })
            .then(function (response) { return response.data; })
            .catch(function (_a) {
            var response = _a.response;
            var reason = response.data.reason;
            throw new Error(reason);
        });
    };
    return HTTPTransport;
}());
exports.HTTPTransport = HTTPTransport;
//# sourceMappingURL=http-transport.js.map