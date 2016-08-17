var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ReactHotLoader = require('react-hot-loader');
var config = require("./webpack.base.config.js");

config.entry.app.unshift('webpack-dev-server/client?http://0.0.0.0:3000/');
config.output.filename = 'bundle.js';

!config.plugins && (config.plugins = []);
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.DefinePlugin({
    // 'process.env': {
    //     'NODE_ENV': JSON.stringify('development')
    // },
    __PROD__: JSON.stringify(false),
    // 'process.env.NODE_ENV': JSON.stringify('development')
}));
config.plugins.push(new webpack.NoErrorsPlugin());

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
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});
server.listen(3000, function (err) {
    if (err) {
        console.log(err);
        process.exit(1);
        return;
    }
    console.log('Listening at http://localhost:3000')
});

module.exports = config;