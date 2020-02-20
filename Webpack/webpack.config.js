const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const{ CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"xxxxxxxxx.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.(jpg|png|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        outputPath:'images/',
                        limit:100,
                        name:'[name].[ext]'
                    }
                   
                }
            },
            {
                
                test:/\.css$/,
                use:[ 
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                
                test:/\.scss$/,
                use:[ 
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        
    }
}