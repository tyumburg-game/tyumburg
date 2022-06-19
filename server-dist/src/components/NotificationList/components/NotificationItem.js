"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationItem = void 0;
var react_1 = require("react");
var react_redux_actions_hook_1 = require("react-redux-actions-hook");
var notifications_1 = require("store/notifications");
require("./NotificationItem.css");
var NOTIFICATION_DEFAULT_TIMEOUT = 3000;
function NotificationItem(props) {
    var _a = props.item, id = _a.id, message = _a.message, _b = _a.timeout, timeout = _b === void 0 ? NOTIFICATION_DEFAULT_TIMEOUT : _b;
    var clearNotifications = (0, react_redux_actions_hook_1.useActions)(notifications_1.notificationsActions).clearNotifications;
    (0, react_1.useEffect)(function () {
        var timer = setTimeout(function () {
            clearNotifications(id);
        }, timeout);
        return function () {
            clearTimeout(timer);
        };
    }, []);
    return React.createElement("div", { className: "notification-item" }, message);
}
exports.NotificationItem = NotificationItem;
//# sourceMappingURL=NotificationItem.js.map