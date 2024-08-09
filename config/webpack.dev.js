const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devServer: {
        port: 3000,
        static: {
            directory: path.join(__dirname,"../build")
        },
        open: true
    },
    module: {
        rules: [
            {
                use: ["style-loader","css-loader"],
                test: /\.(css)$/,
            }
        ]
    }
}

module.exports = merge(common, devConfig)