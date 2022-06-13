// import { Provider } from "react-redux";
import { hydrateRoot } from "react-dom/client";
import { App } from "components/App/App";
import "./styles/index.css";
// import { configureStore } from "store";

const container = document.getElementById("root");
// const store = configureStore();

hydrateRoot(
  container!,
  <App />
  // <Provider store={store}>
  //   <App />
  // </Provider>
);
