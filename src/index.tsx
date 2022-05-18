import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "components/App/App";
import "./styles/index.css";
import configureStore from "store/store";

const container = document.getElementById("root");
const root = createRoot(container!);
const store = configureStore();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
