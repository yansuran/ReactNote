var webpack = require('webpack')
module.exports = {
    entry: {
        index: ['./src/index.js', './src/style.css'],
        events: './src/events.js'
    },
    output: {
      path: './dist/',
      filename: '[name].js',
      publicPath: '/dist' 
      // webpack-dev-server 启动目录是  `/`, `/dist` 目录是打包的目标目录相对于启动目录的路径
    },
     module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
        }, {
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
        }]
    }
}




