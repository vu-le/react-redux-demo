var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ReactHotLoader = require('react-hot-loader');
var config = require("./webpack.base.config.js");

config.entry.app.unshift('webpack-dev-server/client?http://0.0.0.0:3000/', 'webpack/hot/dev-server');
config.output.filename = 'bundle.js';

!config.plugins && (config.plugins = []);
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.DefinePlugin({
    __PROD__: JSON.stringify(false),
    'process.env.NODE_ENV': JSON.stringify('development')
}));

config.module.loaders.unshift({
    test: /.jsx?$/,
    loaders: ['react-hot'],
    //必须指定目录或者排除node_modules，不然会报错（There is another module with an equal name..）
    //include: path.join(__dirname, './app')
    exclude: /(node_modules|bower_components)/
});

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    hot: true,
    publicPath: config.output.publicPath
});
server.listen(3000);

module.exports = config;