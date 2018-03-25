const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  mode: "development",
  devtool: 'eval',

  // Entry points to the project
  entry: {
    main: [
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',
      './src/app/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'), // Path of output file
    filename: 'app.js',
  },
  resolve: {
    //modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.jsx', '.js', '.json'],
  },
  // Server Configuration options
  devServer: {
    contentBase: 'www', // Relative directory for base of server
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: '0.0.0.0', // Change to '0.0.0.0' for external facing server
  },

  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, '.')),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.jsx?$/,  
        exclude: /(node_modules|bower_components)/,  
        loader: 'babel-loader',   
        query: {  
          cacheDirectory: true, 
        }
      }, 
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        use: [{
               loader: "style-loader" 
            }, {
                loader: "css-loader" 
            }, {
                loader: "less-loader"
            }]
      }
    ],
  },
};

module.exports = config;
