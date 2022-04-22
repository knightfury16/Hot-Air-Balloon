const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
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
			}
		]
	},
	resolve:{
		extensions:['.ts','.js']
	},
	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template:"./src/index.html"
		})
	]
}