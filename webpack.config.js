const path = require('path');

module.exports = {
	mode:'development',
	entry:'./src/sketch.ts',
	output:{
		filename:'bundle.js',
		path:path.join(__dirname,'./dist'),
	},
	module:{
		rules: [
			{
				test:/\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
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
	}
}