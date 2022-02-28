const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),//动态获取路径
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ],
    },

}