"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Provider } from "react-redux";
var client_1 = require("react-dom/client");
var App_1 = require("components/App/App");
require("./styles/index.css");
// import { configureStore } from "store";
var container = document.getElementById("root");
// const store = configureStore();
(0, client_1.hydrateRoot)(container, React.createElement(App_1.App, null)
// <Provider store={store}>
//   <App />
// </Provider>
);
