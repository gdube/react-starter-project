const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env) => ({
	mode: env.production ? 'production' : 'development',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.(s[ac]|c)ss$/i,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /(\.jsx|\.js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			inject: false
		}),
		new MiniCssExtractPlugin()
	],
	optimization: {
		minimize: env.production ? true : false,
		minimizer: [
			new CssMinimizerPlugin(),
		],
	}
});
