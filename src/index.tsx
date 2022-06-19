import { Provider } from "react-redux";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "components/App/App";
import { configureStore } from "store";

declare global {
  interface Window {
    __INITIAL_STATE__: RootState;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

type RootState = ReturnType<typeof store.getState>;

const container = document.getElementById("root");
const store = configureStore(window.__INITIAL_STATE__);

hydrateRoot(
  container!,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
