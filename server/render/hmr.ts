import webpack from "webpack";
import devMiddleware from "webpack-dev-middleware";
// @ts-ignore
import hotMiddleware from "@gatsbyjs/webpack-hot-middleware";
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import config from "../../../webpack-configs/webpack.common";
import { render } from "./render";

const compiler = webpack({ ...config, mode: "development" });

export const middleware = [
  devMiddleware(compiler, {
    serverSideRender: true,
    index: false,
    publicPath: config.output.publicPath,
  }),
  hotMiddleware(compiler, {
    path: "/__webpack_hmr",
    log: false,
  }),
  render,
];
