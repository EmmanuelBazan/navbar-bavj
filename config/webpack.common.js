const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../build"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    mode: "production",
    module: {
        rules: [
            {
                use: "babel-loader",
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            },
            {
                test: /\.pdf$/i,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        extensions: [".js",".jsx",".json"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};