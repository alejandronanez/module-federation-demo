const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devServer: {
    port: 3000,
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
      name: 'blog',
      library: { type: 'var', name: 'blog' },
      filename: 'remoteEntry.js',
      remotes: {
        designSystem: 'designSystem',
      },
      exposes: {},
      shared: ['react', 'react-dom'],
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
