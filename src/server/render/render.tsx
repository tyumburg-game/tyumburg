// @ts-ignore
import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import { Request, Response } from "express";
import { Provider } from "react-redux";
import { createStore } from "../../client/store";

export function render(req: Request, res: Response) {
  const { devMiddleware } = res.locals.webpack;
  const jsonWebpackStats = devMiddleware.stats.toJson();
  const { assetsByChunkName } = jsonWebpackStats;

  const [styles, script] = assetsByChunkName.main;
  const reduxStore = createStore();

  delete require.cache[require.resolve("../../ssr.bundle.js")];
  // eslint-disable-next-line
  const { App } = require("../../ssr.bundle");

  const reactHtml = renderToString(
    <StaticRouter location={req.url}>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </StaticRouter>
  );

  const response = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Title</title>
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link href="${styles}" rel="stylesheet">
    </head>
    <body>
      <div id="root">${reactHtml}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(reduxStore.getState())}
      </script>
      <script src="${script}">></script>
    </body>
  </html>
  `;

  res.status(200).send(response);
}
