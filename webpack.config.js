const webpack = require('webpack')
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const rootSrc = path.resolve(__dirname, './src');

var Visualizer = require('webpack-visualizer-plugin');



module.exports={
    devtool:'inline-source-map', 
    devServer:{
        port:9003,
        proxy:{
            '/api/v1':{
                target:'http://localhost:9002/api',
                pathRewrite:{'^/api/v1':''}
            }
        }
    },
    entry:{
        app:'./src/index.tsx'
       // vendor: ['react', 'moment', 'lodash', 'ag-grid']
    },
    output:{
        filename:'[name].[hash].js',
        //chunkFilename: '[name].bundle.js',
        path: path.join(__dirname ,"build")
    },
    //optimization: {
    //    splitChunks: {
    //        chunks: 'all'
    //    }
    //},
    externals:[{

    }],
    module:{
        rules:[
            {
                test :/\.(tsx|ts|spec.tsx)$/,
                exclude: /node_modules/,
                loader :'awesome-typescript-loader',
                query:{
                    ignoreDiagnostics:[2339, 2307, 6143, 2551, 2345]
                }
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader"
                ]
            },
            {   
                test :/\.(png|jpg)$/,
                loader: 'file-loader'
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    resolve:{
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.scss']
    }, 
    plugins:[
        new Visualizer({filename: './statistics.html'}),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{"from":"./src/settings.js", "to":"[name].js", toType:'template'}])
        //new CopyWebpackPlugin([{"from":"./src/settings.js", "to":"[name].[hash].js", toType:'template'}])
    ]
}
