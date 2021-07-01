const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

/*const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "ejemplos/src/index.html"),
  filename: "./index.html"
});*/
module.exports = {
  mode: 'development',
  entry: {
    index: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/i,
        use: {
          loader: 'svg-url-loader',
          options: {}
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  watchOptions: {
    poll: true,
    ignored: '**/node_modules/**',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '',
  },
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0',
    port: 2700,
    public: '0.0.0.0:2700',
    hot: true
  },
};
