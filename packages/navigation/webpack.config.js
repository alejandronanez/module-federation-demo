const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:3002/',
  },

  devServer: {
    port: 3002,
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'navigation',
      library: { type: 'var', name: 'navigation' },
      filename: 'remoteEntry.js',
      exposes: {
        './Navigation': './src/components/Navigation',
      },
      shared: ['react'],
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
