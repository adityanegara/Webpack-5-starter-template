const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     entry : {
         main : "./src/index.js",
     },
     plugins : [new HtmlWebpackPlugin({
         template : "./src/template.html"
     })],
     module:{
         rules: [
           
            {
                test : /\.html$/,
                loader : 'html-loader'
            },
            {
                test: /\.(svg|png|jpg|gif)/,
                type : 'asset/resource'
            }
           

         ]
    }
}