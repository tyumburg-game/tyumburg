"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationList = void 0;
var tslib_1 = require("tslib");
var bem_cn_1 = tslib_1.__importDefault(require("bem-cn"));
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
require("./NotificationList.css");
var useTypedSelector_1 = require("hooks/useTypedSelector");
var NotificationItem_1 = require("./components/NotificationItem");
var b = (0, bem_cn_1.default)("notification-block");
function NotificationList() {
    var items = (0, useTypedSelector_1.useTypedSelector)(function (state) { return state.notifications; }).items;
    return (React.createElement(Modal_1.default, { className: b({ active: items.length > 0 }) },
        React.createElement(Modal_1.default.Header, { title: "" }, items.map(function (notification) { return (React.createElement(NotificationItem_1.NotificationItem, { item: notification, key: notification.id })); }))));
}
exports.NotificationList = NotificationList;
//# sourceMappingURL=NotificationList.js.map