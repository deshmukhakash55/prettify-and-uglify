const path = require("path");

module.exports = {
  entry: {
    "json-uglify": path.join(__dirname, "json-uglify", "src", "index.tsx"),
  },
  output: {
    path: path.join(__dirname, "build"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", "@babel/preset-react"]],
          },
        },
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
