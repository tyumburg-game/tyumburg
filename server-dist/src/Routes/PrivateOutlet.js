"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateOutlet = void 0;
var react_router_dom_1 = require("react-router-dom");
var use_auth_1 = require("hooks/use-auth");
var PageLoader_1 = require("components/PageLoader/PageLoader");
var paths_1 = require("./paths");
function PrivateOutlet() {
    var authState = (0, use_auth_1.useAuth)();
    switch (authState) {
        case "loading":
            return React.createElement(PageLoader_1.PageLoader, null);
        case "auth":
            return React.createElement(react_router_dom_1.Outlet, null);
        case "external":
        default:
            return React.createElement(react_router_dom_1.Navigate, { to: paths_1.PATHS.SIGN_IN });
    }
}
exports.PrivateOutlet = PrivateOutlet;
//# sourceMappingURL=PrivateOutlet.js.map