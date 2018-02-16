const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		'element-coordinates': './src/element-coordinates.js',
		'element-coordinates.min': './src/element-coordinates.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname),
		library: 'ElementCoordinates',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};