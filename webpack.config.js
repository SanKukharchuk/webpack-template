const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    mode: 'production',
    entry: {
        filename: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash:8].js',
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|svg|png|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'My Web Page',
            filename: 'index.html',
            template: 'src/index.html',


        })
    ],

     /*  Use only watch: true OR "scripts": {"serve": "webpack serve --open --mode development"} npm run serve
    watch: true,
    watchOptions: {
        // здійснювати повторну зборку через секунду після виявлення змін
        aggregateTimeout: 1000,
        // файли чи директорії, які ігноруються
        ignored: /node_modules/,
        // перевіряти файли на наявність змін кожну секунду
        poll: 1000
      }, */

}