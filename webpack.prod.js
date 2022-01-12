const path = require("path");
const common = require("./webpack.common");
const {merge} = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode : "production",
    output : {
        filename : '[name].[contenthash].bundle.js',
        path : path.resolve(__dirname, "dist"),
        assetModuleFilename : 'images/[name].[hash][ext]'
    },
    plugins: [new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),new CleanWebpackPlugin()],
    module : {
        rules : [
            {
                test: /\.s[ac]ss$/i,
                use : [MiniCssExtractPlugin.loader ,"css-loader", "sass-loader"]
            },
            {
                test : /\.m?js$/,
                exclude : / (node_modules|bower_components)/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['@babel/preset-env']
                    }
                }
            }
        ],
        
    },
    optimization : {
        minimizer : [
            new CssMinimizerPlugin(), new TerserPlugin()
        ],
    }
});