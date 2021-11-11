'use strict'

const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugin = [];

    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

    Object.keys(entryFiles).map(index => {
        const entryFile = entryFiles[index];

        const match = entryFile.match(/src\/(.*)\/index\.js/);
        const pageName = match && match[1]
        console.log(pageName, entryFile)
        entry[pageName] = entryFile;

        htmlWebpackPlugin.push(new HtmlWebpackPlugin({
            template: path.join(__dirname, `src/${pageName}/index.html`),
            filename: `${pageName}.html`,
            chunks: [pageName],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false,
            }
        }))
    })

    return {
        entry,
        htmlWebpackPlugin
    }
}

const {
    entry,
    htmlWebpackPlugin
} = setMPA();

module.exports = {
    entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    watchOptions: { // 只有开启监听模式，watchOptions才有意义
        ignored: /node_modules/, // 不监听的文件
        aggregateTimeout: 1000, // 发生变化后等待时间后再编译，默认300ms
        poll: 1000 // 轮询时间，默认每秒问1000次
    },
    module: {
        rules: [{
                test: /.js$/,
                use:module.exports = {
    entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'development',
    watchOptions: { // 只有开启监听模式，watchOptions才有意义
        ignored: /node_modules/, // 不监听的文件
        aggregateTimeout: 1000, // 发生变化后等待时间后再编译，默认300ms
        poll: 1000 // 轮询时间，默认每秒问1000次
    },
    module: {
        rules: [{
                test: /.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 10240,
                        name: 'images/[name].[ext]'
                    }
                }]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [].concat(htmlWebpackPlugin),
    devServer: {
        static: path.join(__dirname, './dist'),
        open: true
    },
    devtool: 'source-map'
} ['babel-loader', 'es-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 10240,
                        name: 'images/[name].[ext]'
                    }
                }]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [].concat(htmlWebpackPlugin),
    devServer: {
        static: path.join(__dirname, './dist'),
        open: true
    },
    devtool: 'source-map'
}