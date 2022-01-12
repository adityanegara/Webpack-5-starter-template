const path = require("path");
const common = require("./webpack.common");
const {merge} = require('webpack-merge');

module.exports = merge(common, {
    mode : "development",
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, "dist"),
    },
    devServer : {
        contentBase : path.join(__dirname, "dist"),
        compress : true,
        port : 9000,
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use : ["style-loader" ,"css-loader", "sass-loader"]
            },
        ]
    }
});