const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const{ CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require('webpack');
const output = require('./webpack.output.js')
module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:output,
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
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                options:{
                    presets:["@babel/preset-env"]
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin("菜鸟上路")
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        open:true
        
    }
}
