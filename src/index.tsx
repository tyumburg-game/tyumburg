import { Provider } from "react-redux";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "components/App/App";
import { store } from "./store";

function startServiceWorker() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        })
        .catch((error: string) => {
          console.log("ServiceWorker registration failed: ", error);
        });
    });
  }
}

startServiceWorker();

const container = document.getElementById("root");

hydrateRoot(
  container!,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
