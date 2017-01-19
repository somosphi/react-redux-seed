const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '/js/[name].js',
    path: './release'
  },
  plugins: [
        new CopyWebpackPlugin([
          {context: './src/static', from: '**/*', to: './'}, //copy all static files to release
        ])
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },

      }
    ]
  },

  devServer: {
    historyApiFallback: true,
  }

}
