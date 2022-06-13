"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateOutlet = void 0;
var react_router_dom_1 = require("react-router-dom");
var use_auth_1 = require("hooks/use-auth");
var paths_1 = require("./paths");
function PrivateOutlet() {
    var auth = (0, use_auth_1.useAuth)();
    return auth ? React.createElement(react_router_dom_1.Outlet, null) : React.createElement(react_router_dom_1.Navigate, { to: paths_1.PATHS.SIGN_IN });
}
exports.PrivateOutlet = PrivateOutlet;
