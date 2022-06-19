"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var App_1 = require("components/App/App");
var store_1 = require("./store");
function startServiceWorker() {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
        window.addEventListener("load", function () {
            navigator.serviceWorker
                .register("/sw.js")
                .then(function (registration) {
                console.log("ServiceWorker registration successful with scope: ", registration.scope);
            })
                .catch(function (error) {
                console.log("ServiceWorker registration failed: ", error);
            });
        });
    }
}
startServiceWorker();
var container = document.getElementById("root");
(0, client_1.hydrateRoot)(container, React.createElement(react_redux_1.Provider, { store: store_1.store },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement(App_1.App, null))));
//# sourceMappingURL=index.js.map