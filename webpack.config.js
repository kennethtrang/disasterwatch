const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(`${__dirname}/build`),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    publicPath: '/build',
    compress: true,
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
      '/news': 'http://localhost:3000/news',
      '/messages': 'http://localhost:3000/messages',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader'],
      },
    ],
  },
};
