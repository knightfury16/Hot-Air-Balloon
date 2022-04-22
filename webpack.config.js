const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
	mode:'development',
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
			}
		]
	},
	resolve:{
		extensions:['.ts','.js']
	},
	devtool: 'inline-source-map',
	devServer:{
		static: {
			directory: path.join(__dirname, 'dist'),
		}
	},

	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template:"./src/index.html"
		})
	]
}