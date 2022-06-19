import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "components/App/App";
import { store } from "store";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

function startServiceWorker() {
  if (typeof window !== 'undefined' && "serviceWorker" in navigator) {
      window.addEventListener("load", () => {
          navigator.serviceWorker.register("/sw.js").then(registration => {
              console.log("ServiceWorker registration successful with scope: ", registration.scope);
          }).catch((error: string) => {
              console.log("ServiceWorker registration failed: ", error);
          });
      });
  }
}

startServiceWorker();

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
