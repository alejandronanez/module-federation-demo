const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:3001/',
  },

  devServer: {
    port: 3001,
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
      name: 'designSystem',
      library: { type: 'var', name: 'designSystem' },
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/components/Button',
        './Avatar': './src/components/Avatar',
      },
      shared: ['react'],
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
