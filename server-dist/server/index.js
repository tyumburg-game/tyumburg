"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var express_1 = tslib_1.__importDefault(require("express"));
var hmr_1 = require("./render/hmr");
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8080;
app.use(express_1.default.static(path_1.default.join(__dirname, "../../dist")));
app.use(hmr_1.middleware);
app.listen(PORT, function () {
    console.log("App on http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map