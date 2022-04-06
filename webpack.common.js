const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'main-bundle-[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', 'scss',],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}
