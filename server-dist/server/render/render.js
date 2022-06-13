"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var path_1 = tslib_1.__importDefault(require("path"));
// @ts-ignore
var react_1 = tslib_1.__importDefault(require("react"));
var server_1 = require("react-dom/server");
var App_1 = require("../../src/components/App/App");
function render(req, res) {
    var devMiddleware = res.locals.webpack.devMiddleware;
    var jsonWebpackStats = devMiddleware.stats.toJson();
    var assetsByChunkName = jsonWebpackStats.assetsByChunkName;
    var script = assetsByChunkName.main[1];
    var html = fs.readFileSync(path_1.default.join(__dirname, "../../../www/index.html"), {
        encoding: "utf-8",
    });
    var reactHtml = (0, server_1.renderToString)(react_1.default.createElement(App_1.App, null));
    var response = html.replace('<div id="root"></div>', "<div id=\"root\">".concat(reactHtml, "</div>\n    <script src=\"").concat(script, "\">></script>"));
    res.status(200).send(response);
}
exports.render = render;
