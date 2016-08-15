var webpack = require('webpack');
var config = require("./webpack.base.config.js");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

delete config.output.publicPath;
!config.plugins && (config.plugins = []);
config.plugins.push(new webpack.optimize.UglifyJsPlugin());
config.plugins.push(new CleanWebpackPlugin(['dist', 'build']));
config.plugins.push(new HtmlWebpackPlugin({
    template:'./template.html'
}));
config.plugins.push(new webpack.DefinePlugin({
        __PROD__: JSON.stringify(true),
        // 'process.env.NODE_ENV':JSON.stringify('production')
    }));

module.exports = config;