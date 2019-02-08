const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: ['./src/main.js', './src/sass/main.scss'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist'
	},
	devServer: {
		port: 3100,
		hot: true,
		contentBase: path.join(__dirname, 'dist')
	},
	plugins: [
		new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html')})
	],
	module: {
		rules: [
			{
        test: /\main.scss$/,
        use: [
        	'css-hot-loader',
        	MiniCssExtractPlugin.loader,
        	{
            loader: 'css-loader'
        	},
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\main.scss$/,
        use: [
        	'css-hot-loader',
        	MiniCssExtractPlugin.loader,
        	{
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[local]&[hash:base64:2]"
            },
        	},
          'postcss-loader',
          'sass-loader'
        ]
      },
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
	      test: /\.js$/,
	      exclude: /node_modules/,
	      use: ['babel-loader', 'eslint-loader']
	    }
		]
	},
	mode: 'development'
};