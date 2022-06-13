"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiComponentsPage = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var ErrorBoundary_1 = tslib_1.__importDefault(require("components/ErrorBoundary/ErrorBoundary"));
var Input_1 = tslib_1.__importDefault(require("components/Input/Input"));
var ValidationMessage_1 = tslib_1.__importDefault(require("components/Input/ValidationMessage/ValidationMessage"));
var Modal_1 = tslib_1.__importDefault(require("components/Modal/Modal"));
var Button_1 = tslib_1.__importDefault(require("../../components/Button/Button"));
require("./UiComponentsPage.css");
function UiComponentsPage() {
    var _a = (0, react_1.useState)(""), text = _a[0], setText = _a[1];
    var handleFirstName = (0, react_1.useCallback)(function (event) {
        setText(event.target.value);
    }, []);
    return (React.createElement(ErrorBoundary_1.default, null,
        React.createElement("div", { className: "grid" },
            React.createElement("div", { className: "modals-grid" },
                React.createElement(Modal_1.default, null,
                    React.createElement(Modal_1.default.Header, { title: "Modal Title" }),
                    React.createElement(Modal_1.default.Content, null, "Content"),
                    React.createElement(Modal_1.default.Footer, null, "Footer")),
                React.createElement("div", null, "Dialog"),
                React.createElement(Modal_1.default, { fixed: false },
                    React.createElement(Modal_1.default.Header, { title: "Modal Title" }),
                    React.createElement(Modal_1.default.Content, null,
                        React.createElement("div", { className: "inputs-grid" },
                            React.createElement("div", null, "Default input"),
                            React.createElement(Input_1.default, { onChange: function () { }, value: "input", label: "First Name" }),
                            React.createElement("div", null, "Invalid input"),
                            React.createElement(Input_1.default, { onChange: handleFirstName, value: text, label: "First Name", mode: "error", comment: React.createElement(ValidationMessage_1.default, null, "invalid") }),
                            React.createElement("div", null, "Type number"),
                            React.createElement(Input_1.default, { onChange: function () { }, value: "3", label: "Ages", type: "number" }))),
                    React.createElement(Modal_1.default.Footer, null,
                        React.createElement("div", { className: "buttons-grid" },
                            React.createElement("div", null,
                                React.createElement(Button_1.default, { mode: "primary", onClick: function (event) { return console.log("click", event); } }, "Primary")),
                            React.createElement("div", null,
                                React.createElement(Button_1.default, { mode: "secondary", className: "parent-class-name", onClick: function (event) { return console.log("click", event); } }, "Secondary")),
                            React.createElement("div", null,
                                React.createElement(Button_1.default, { mode: "dangerous", className: "parent-class-name-one parent-class-name-two", onClick: function (event) { return console.log("click", event); } }, "Dangerous")))))))));
}
exports.UiComponentsPage = UiComponentsPage;
