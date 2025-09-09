const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.[contenthash].js",
        clean: true,
        publicPath: "/"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|pdf)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][hash][ext]"
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][hash][ext]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: "public/manifest.json", to: "manifest.json"},
                {from: "public/browserconfig.xml", to: "browserconfig.xml"},
                {from: "public/404.html", to: "404.html"},
                {from: "public/503.html", to: "503.html"},
                {from: "public/favicon.ico", to: "favicon.ico"},
                {from: "public/images", to: "images"},
                {from: "public/pdfs", to: "pdfs"},
                {from: "public/*.png", to: "[name][ext]"}
            ]
        })
    ],
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: "single"
    }
};
