"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLink = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function useLink() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return (0, react_1.useCallback)(function (url) { return function () { return navigate(url); }; }, []);
}
exports.useLink = useLink;
