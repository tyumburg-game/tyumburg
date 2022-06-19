"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
var tslib_1 = require("tslib");
// @ts-ignore
var react_1 = tslib_1.__importDefault(require("react"));
var server_1 = require("react-router-dom/server");
var server_2 = require("react-dom/server");
var react_redux_1 = require("react-redux");
var store_1 = require("../../src/store");
function render(req, res) {
    var devMiddleware = res.locals.webpack.devMiddleware;
    var jsonWebpackStats = devMiddleware.stats.toJson();
    var assetsByChunkName = jsonWebpackStats.assetsByChunkName;
    var _a = assetsByChunkName.main, styles = _a[0], script = _a[1];
    var reduxStore = (0, store_1.createStore)();
    delete require.cache[require.resolve("../../../dist/ssr.bundle.js")];
    // eslint-disable-next-line
    var App = require("../../../dist/ssr.bundle").App;
    var reactHtml = (0, server_2.renderToString)(react_1.default.createElement(server_1.StaticRouter, { location: req.url },
        react_1.default.createElement(react_redux_1.Provider, { store: reduxStore },
            react_1.default.createElement(App, null))));
    var response = "<!DOCTYPE html>\n  <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\" />\n      <title>Title</title>\n      <link href=\"https://fonts.googleapis.com\" rel=\"preconnect\" />\n      <link crossorigin href=\"https://fonts.gstatic.com\" rel=\"preconnect\" />\n      <link\n        href=\"https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap\"\n        rel=\"stylesheet\"\n      />\n      <link href=\"".concat(styles, "\" rel=\"stylesheet\">\n    </head>\n    <body>\n      <div id=\"root\">").concat(reactHtml, "</div>\n      <script>\n        window.__INITIAL_STATE__ = ").concat(JSON.stringify(reduxStore.getState()), "\n      </script>\n      <script src=\"").concat(script, "\">></script>\n    </body>\n  </html>\n  ");
    res.status(200).send(response);
}
exports.render = render;
//# sourceMappingURL=render.js.map