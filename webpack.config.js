var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    scripts: [
      'babel-polyfill',
      path.join(__dirname, 'src/scripts/main.js')
    ],
    styles: [
      path.join(__dirname, 'src/styles/main.scss')
    ]
  },
  output: {
    path: path.join(__dirname, 'public/assets'),
    publicPath: '/assets/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.s(a|c)ss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'src/scripts')
        ],
        loader: 'babel-loader',
        query: {
          plugins: [
            'transform-runtime',
            'transform-react-jsx',
            'transform-react-display-name',
            'transform-class-properties',
            'transform-async-to-generator'
          ],
          presets: [
            'es2015'
          ]
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['public'] }
      }
    )
  ]
};
