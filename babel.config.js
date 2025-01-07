export default {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      {
        runtime: "classic",
        pragma: "createElement",
        pragmaFrag: "Fragment",
      },
    ],
  ],
};
