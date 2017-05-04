'use strict'

const LiveReloadPlugin = require('webpack-livereload-plugin')
    , devMode = require('.').isDevelopment

/**
 * Fast source maps rebuild quickly during development, but only give a link
 * to the line where the error occurred. The stack trace will show the bundled
 * code, not the original code. Keep this on `false` for slower builds but
 * usable stack traces. Set to `true` if you want to speed up development.
 */
    , USE_FAST_SOURCE_MAPS = false
/*
FIX FOR PHASER WEBPACK STUFF!!!!!!!
*/
var path = require('path')
var webpack = require('webpack')

var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js')

module.exports = {
  entry: './app/game/main.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  context: __dirname,
  devtool: devMode && USE_FAST_SOURCE_MAPS
    ? 'cheap-module-eval-source-map'
    : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*'],
    alias: {
      'phaser': phaser,
      'pixi.js': pixi,
      'p2': p2,
    }
  },
  module: {
    loaders: [
            { test: /pixi\.js/, loader: "script" },
    ],
    rules: [{
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }]
    }
    ]
  },
  plugins: devMode
    ? [new LiveReloadPlugin({appendScriptTag: true})]
    : []
}
