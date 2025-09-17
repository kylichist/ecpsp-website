const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "../src/index.jsx"),
    output: {
        path: path.resolve(__dirname, "../build"),
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
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve(__dirname, "./postcss.config.js")
                            }
                        }
                    }
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
            template: path.resolve(__dirname, "../public/index.html"),
            favicon: path.resolve(__dirname, "../public/favicon.ico")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.resolve(__dirname, "../public/manifest.json"), to: "manifest.json"},
                {from: path.resolve(__dirname, "../public/browserconfig.xml"), to: "browserconfig.xml"},
                {from: path.resolve(__dirname, "../public/404.html"), to: "404.html"},
                {from: path.resolve(__dirname, "../public/503.html"), to: "503.html"},
                {from: path.resolve(__dirname, "../public/favicon.ico"), to: "favicon.ico"},
                {from: path.resolve(__dirname, "../public/images"), to: "images"},
                {from: path.resolve(__dirname, "../public/pdfs"), to: "pdfs"},
                {from: path.resolve(__dirname, "../public/*.png"), to: "[name][ext]"},
                {from: path.resolve(__dirname, "../public/robots.txt"), to: "robots.txt"}
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
