const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //!!

module.exports = {
    mode: "production", // новое
    entry: './src/index.js',
    // devServer: {
    //     watchContentBase: true,
    //     hot: true,
    //     open: true,
    // },
    // devtool: "eval-cheap-source-map",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "../dist"),
    },
    module: {
        rules: [
            {
                test: /\.s[a|c]ss$/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                      loader: "postcss-loader",
                      options: {
                        postcssOptions: {
                          plugins: [
                            require("postcss-preset-env"),
                            require("autoprefixer"),
                            require("cssnano"),
                          ],
                        },
                      },
                    },
                    'sass-loader'
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: ["babel-loader"],
                // {
                //     // loader: 'babel-loader',
                //     // options: {
                //     //     presets: ['@babel/preset-env']
                //     // }
                // }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader',],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader',],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ 
            template: './index.html' 
            // template: path.resolve(__dirname, "../index.html"),
        })
    ],
};