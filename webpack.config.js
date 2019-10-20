let path = require("path");
let htmlWebpackPlugin = require("html-webpack-plugin");
let { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: {
        watermelon: "./src/js/index.js",
        // XiGua: "./src/js/index.js"
    },
    output: {
        // publicPath: "www.cdn.com/",
        path: path.resolve(__dirname, "bundle")
    },
    /*
        entry: "./src/js/index.js",
        output: {
            filename: "watermelon",
            ...
        }
        前者可以输出多个文件并引用
    */
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|webp|jpeg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name]_[hash].[ext]",
                        outputPath: "images",
                        limit: 2048
                    }
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    "sass-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "font"
                    }
                }
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/html/template.html"
        }),
        new CleanWebpackPlugin()
    ]
}