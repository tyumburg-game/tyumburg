"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenterPageLayout = void 0;
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
require("./CenterPageLayout.css");
var b = (0, bem_cn_1.default)("center-page-layout");
function CenterPageLayout(props) {
    var className = props.className, children = props.children;
    return React.createElement("div", { className: b({}).mix(className) }, children);
}
exports.CenterPageLayout = CenterPageLayout;
//# sourceMappingURL=CenterPageLayout.js.map