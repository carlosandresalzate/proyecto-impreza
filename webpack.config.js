'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const miniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 8080,
        hot: true,
        open: {
            app: {
                name: 'chrome',
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html',
            title: 'Home - Impreza',
            minify: false
         }),
         new miniCSSExtractPlugin({
            linkType: "text/css",
            filename: "style.css"
         }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: miniCSSExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}
