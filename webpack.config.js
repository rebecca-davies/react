const prod = process.env.NODE_ENV === 'production';

const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new InterpolateHtmlPlugin({
        PUBLIC_URL: 'static' 
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      favicon: './public/static/favicon.ico'
    }),
  ],
};

