"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPTransport = void 0;
var tslib_1 = require("tslib");
var env_1 = require("constants/env");
var getQueryString_1 = require("utils/getQueryString");
var http_transport_types_1 = require("./http-transport-types");
var HTTPTransport = /** @class */ (function () {
    function HTTPTransport(path, baseUrl) {
        if (path === void 0) { path = ""; }
        if (baseUrl === void 0) { baseUrl = env_1.env.HOST_API; }
        this.path = path;
        this.baseUrl = baseUrl;
    }
    HTTPTransport.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, tslib_1.__assign(tslib_1.__assign({}, options), { method: http_transport_types_1.METHODS.GET }), options.timeout);
    };
    HTTPTransport.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, tslib_1.__assign(tslib_1.__assign({}, options), { method: http_transport_types_1.METHODS.POST }), options.timeout);
    };
    HTTPTransport.prototype.put = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, tslib_1.__assign(tslib_1.__assign({}, options), { method: http_transport_types_1.METHODS.PUT }), options.timeout);
    };
    HTTPTransport.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request(url, tslib_1.__assign(tslib_1.__assign({}, options), { method: http_transport_types_1.METHODS.DELETE }), options.timeout);
    };
    HTTPTransport.prototype.request = function (url, options, timeout) {
        var _this = this;
        if (timeout === void 0) { timeout = 5000; }
        var method = options.method, _a = options.query, query = _a === void 0 ? {} : _a, _b = options.data, data = _b === void 0 ? {} : _b, _c = options.headers, headers = _c === void 0 ? {
            "content-type": "application/json;charset=UTF-8",
        } : _c;
        return new Promise(function (resolve, reject) {
            fetch("".concat(_this.baseUrl).concat(_this.path).concat(url).concat((0, getQueryString_1.getQueryString)(query)), {
                headers: headers,
                body: headers["content-type"] === "application/json;charset=UTF-8"
                    ? JSON.stringify(data)
                    : data,
                method: method,
            })
                .then(function (response) { return response.json(); })
                .then(function (response) { return resolve(response); })
                .catch(function (error) { return reject(error.reason); });
            setTimeout(function () {
                reject();
            }, timeout);
        });
    };
    return HTTPTransport;
}());
exports.HTTPTransport = HTTPTransport;
