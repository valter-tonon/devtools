const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const {DefinePlugin} = require('webpack');


module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    modules: true
                }
            }, {
                loader: 'sass-loader'
            }]
        }]
    },
    devtool: 'inline-source-map',
    devServer: {
        devMiddleware: {
            writeToDisk: true
        },
        static: {
            directory: './public'
        },
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.dev.html'
        }),
        new DefinePlugin({
            'process.env.API_URL': JSON.stringify('http://localhost')
        })
    ]
})
