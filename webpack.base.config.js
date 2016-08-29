/**
 * Created by Administrator on 2016/8/8 0008.
 */
var webpack = require('webpack');
var path = require('path');

var config = {
    entry: {
        app: ['./app/index.js']
    },
    output: {
        filename: 'bundle.[hash].js',
        publicPath: '/public/',
        //一定要是绝对目录
        path: path.resolve(__dirname, './build')
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: [
                        'react', 'es2015'
                    ],
                    plugins: ['transform-object-rest-spread']
                }
            }, {
                test: /.scss$/,
                loader: 'style!css!sass'
            }, {
                test: /.(png|gif|jpg|jpeg|webp)$/,
                loader: 'url?limit=5000'
            }
        ]
    }
};

module.exports = config;
