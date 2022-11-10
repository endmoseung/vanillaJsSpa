const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
    proxy: {
      "/dev": {
        target: "https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com", // 클라이언트에서 api로 보내는 요청은 주소를 3095로 바꿔서 보내겠다 라는 뜻
        changeOrigin: true, // cross origin 허용 설정
      },
    },
  },
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: {
      keep: /\.git/,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
