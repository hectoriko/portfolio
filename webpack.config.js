const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,

  entry: "./src/js/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.pdf$/i,
        type: "asset/resource",
      },
      {
        test: /\.(mp4|webm)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Inicio | Héctor",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Maquetador Web | Héctor",
      filename: "web.html",
      template: "./src/web.html",
    }),
    new HtmlWebpackPlugin({
      title: "Diseño gráfico | Héctor",
      filename: "design.html",
      template: "./src/design.html",
    }),
  ],

  resolve: {
    extensions: [".js", ".jsx"],
  },

  devtool: "source-map",

  devServer: {
    contentBase: "./dist",
    hot: true,
    // https: true,
    host: "0.0.0.0",
    // host: "192.168.0.26",
    port: 8080,
    disableHostCheck: true,
    useLocalIp: true,

    index: "index.html",
  },
};
