"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
require("./ErrorBoundary.css");
var ErrorBoundary = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: null,
            errorInfo: null,
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
    };
    ErrorBoundary.prototype.render = function () {
        var _a = this.state, error = _a.error, errorInfo = _a.errorInfo;
        var children = this.props.children;
        if (errorInfo) {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("h2", null, "Something went wrong."),
                react_1.default.createElement("details", { className: "errorBoundary" },
                    error && error.toString(),
                    react_1.default.createElement("br", null),
                    errorInfo.componentStack)));
        }
        return children;
    };
    return ErrorBoundary;
}(react_1.default.Component));
exports.default = ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map