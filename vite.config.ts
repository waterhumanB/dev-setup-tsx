import { defineConfig } from "vite";
import viteBabel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    viteBabel({
      babelConfig: {
        presets: [
          ["@babel/preset-env", { targets: "defaults" }],
          ["@babel/preset-react", { runtime: "classic" }],
          "@babel/preset-typescript",
        ],
      },
    }),
  ],
  esbuild: {
    jsxFactory: "createElement",
    jsxFragment: "Fragment",
  },
});
