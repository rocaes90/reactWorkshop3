var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'}, 
            {test: /\.css$/, use: [ 'style-loader', 'css-loader']}, // translates CSS into CommonJS
            {test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                //resolve-url-loader may be chained before sass-loader if necessary
                use: ['css-loader', 'sass-loader']
            })},
            {test: /\.(?:png|jpg|svg)$/, loader: 'url-loader',
                query: {
                    // Inline images smaller than 10kb as data URIs        
                    limit: 10000
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),        
        new ExtractTextPlugin({
            filename: './css/style.css'
        })
    ]
}