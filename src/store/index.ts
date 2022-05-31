import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { RootState } from "store/types";
import { rootReducer } from "./reducer";

export function configureStore(initialState: RootState = {} as RootState) {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [thunk];

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
