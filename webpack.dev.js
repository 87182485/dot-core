var path = require('path');
var webpack = require('webpack');

var helpers = require('./webpack.helpers');

var commonsChuckPlugin = webpack.optimize.CommonseChunkPlugin;
var autoprefixer = require('autoprefixer');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var copyWebpackPlugin = require('copy-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
    debug: true,
    //watch: true,
    devtool: 'eval-source-map',
 
    entry: {
        'polyfills': './angular2App/polyfills.ts',
        'vendor': './angular2App/vendor.ts',
        'app': './angular2App/boot.ts' // our angular app
    },
 
    output: {
        path: "./wwwroot/",
        filename: 'dist/[name].bundle.js',
        publicPath: "/"
    },
 
    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.less', '.scss', '.html']
    },
 
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        outputPath: path.join(__dirname, 'wwwroot/')
    },
 
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375, // 2375 -> Duplicate string index signature
                        2502 // 2502 -> Referenced directly or indirectly
                    ]
                },
                exclude: [/node_modules\/(?!(ng2-.+))/]
            },
 
            // copy those assets to output
            {
                test: /\.(png|jpg|gif|ico|woff|woff2|ttf|svg|eot)$/,
                exclude: /node_modules/,
                loader: "file?name=assets/[name]-[hash:6].[ext]",
            },
 
            // Load css files which are required in vendor.ts
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: "style-loader!css-loader"
            },
 
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'raw-loader!style-loader!css-loader!sass-loader'
            },
 
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ],
        noParse: [/.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/, /angular2-polyfills\.js/]
    },
 
    plugins: [
        new cleanWebpackPlugin(
            [
                './wwwroot/dist',
                './wwwroot/fonts',
                './wwwroot/assets'
            ]
        ),
 
        new commonsChunkPlugin({
            name: ['vendor', 'polyfills']
        }),
 
        new htmlWebpackPlugin({
            filename: 'index.html',
            inject: 'body',
            chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'app']),
            template: 'angular2App/index.html'
        }),
 
        new copyWebpackPlugin([
            { from: './angular2App/images/*.*', to: "assets/", flatten: true }
        ])
    ]
};

module.exports = config;