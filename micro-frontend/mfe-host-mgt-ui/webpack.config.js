const HtmlwebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const dependencies = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 1000,
  },
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      // filename: 'remoteEntry.js',
      remotes: {
        shared: "shared@http://localhost:1001/remoteEntry.js",
        // menu: "menu@http://localhost:1002/remoteEntry.js",
        // cart: "cart@http://localhost:1003/remoteEntry.js",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
          eager: false,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
          eager: false,
        },
      },
    }),
    new HtmlwebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
