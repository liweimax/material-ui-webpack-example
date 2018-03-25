const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: {
    main: [
      './src/app/app.js',
    ],
  },
   mode: "production",
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: path.resolve(__dirname, 'build'), // Path of output file
    filename: 'app.js', // Name of output file
  },
  resolve: {
    //modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['.jsx', '.js', '.json'],
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    // Transfer Files
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
      } 
    ],
  },
};

module.exports = config;
