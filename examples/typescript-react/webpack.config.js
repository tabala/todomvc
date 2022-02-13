const path = require('path');


module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, './src/app.tsx'),
	devtool: 'inline-source-map',
	devServer: {
		static: path.resolve(__dirname, './'),
		client: {
			logging: 'info',
			reconnect: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist'),
	},
};
