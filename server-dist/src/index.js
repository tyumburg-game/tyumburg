"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("components/App/App");
var store_1 = require("store");
var container = document.getElementById("root");
var store = (0, store_1.configureStore)(window.__INITIAL_STATE__);
(0, client_1.hydrateRoot)(container, React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1.App, null))));
