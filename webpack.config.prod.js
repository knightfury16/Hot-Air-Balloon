const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
	mode:'production',
	entry:'./src/sketch.ts',
	output:{
		filename:'bundle.js',
		path:path.join(__dirname,'./dist'),
		assetModuleFilename: "assets/[hash][ext][query]"
	},
	module:{
		rules: [
			{
				test:/\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			}
		]
	},
	resolve:{
		extensions:['.ts','.js']
	},
	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template:"./src/index.html",
			favicon: "./assets/favicon.png"
		}),
		new MiniCssExtractPlugin()
	]
}