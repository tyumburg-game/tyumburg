import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducer";

export const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);

export function configureStore(initialState = {}) {
  const composeEnhancers = isServer
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
