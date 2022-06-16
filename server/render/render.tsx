import * as fs from "fs";
import path from "path";
// @ts-ignore
import React from "react";
import { renderToString } from "react-dom/server";
import { Request, Response } from "express";

export function render(req: Request, res: Response) {
  const { devMiddleware } = res.locals.webpack;
  const jsonWebpackStats = devMiddleware.stats.toJson();
  const { assetsByChunkName } = jsonWebpackStats;
  const script = assetsByChunkName.main[1];

  // eslint-disable-next-line global-require
  const App = require("../../dist/ssr.bundle");

  const html = fs.readFileSync(
    path.join(__dirname, "../../../www/index.html"),
    {
      encoding: "utf-8",
    }
  );

  const reactHtml = renderToString(<App />);

  const response = html.replace(
    '<div id="root"></div>',
    `<div id="root">${reactHtml}</div>
    <script src="${script}">></script>`
  );

  res.status(200).send(response);
}
