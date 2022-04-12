const path = require('path')
const {DefinePlugin} = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/main/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main-bundle-[hash].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'scss'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new DefinePlugin({
            'process.env.CLIENT_ID': JSON.stringify('1065700825291-pdj41lhmmoie2c3cu22iu445r8qr7ghv.apps.googleusercontent.com'),
            'process.env.CLIENT_JWT': JSON.stringify(2),
            'process.env.CLIENT_SECRET': JSON.stringify('3MYKKrtD3UqQnjliuaZpkbPNEw8q1p4qPYqVBcyL')
        })
    ]
}
