import { Config } from "@stencil/core";
import { postcss } from "@stencil/postcss";
const postcssImport = require("postcss-import");

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: "src/global/app.css",
  plugins: [
    postcss({
      plugins: [
        postcssImport({
          path: ["node_modules/tachyons/src/", "src/"]
        })
      ]
    })
  ]
};
