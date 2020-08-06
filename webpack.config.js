const path = require('path');

module.exports = {
    entry: './jsx/main.jsx',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules: [
            { 
                test: /\.m?jsx?$/, 
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            injectType: 'linkTag'
                        }
                    },
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                ],
            }
        ]
    }
};