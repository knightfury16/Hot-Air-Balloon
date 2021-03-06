const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode:'development',
	entry:'./src/index.ts',
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
				test: /\.(png|svg|jpg|jpeg|gif|mp3|wav)$/i,
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
	devtool: 'eval-source-map',
	devServer:{
		static: {
			directory: path.join(__dirname, 'dist'),
		}
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