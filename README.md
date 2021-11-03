# webpack初级入门

## 环境安装

### 创建空目录和package.json

```shell
    mkdir webpack-primary
    cd webpack-primary
    npm init -y
```

### 开发环境安装webpack和webpack-cli

```shell
    npm install webpack webpack-cli -D
```

### 确认安装完毕

webpack4+会把webpack安装在以下目录

```shell
    ./node_modules/.bin/webpack -v
```

## 基础搭建

### 简单demo

#### 创建webpack.config.js

```js
    'use strict'

    const path = require('path');

    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        mode: 'production'
    }
```

#### src目录创建打包入口

```js
    // src/index.js
    import { helloworld } from "./helloworld";
    document.write(helloworld());
    

    // src/helloworld.js
    export function helloworld() {
        return 'helloworld'
    }
```

#### 执行命令

默认执行webpack.config.js

```shell
    ./node_modules/.bin/webpack
```

### npm script运行webpack

#### 通过npm run build进行构建

原理：因为package.json默认可以读取到node_modules/.bin目录（模块局部安装）创建的软链接

```json
    {
        "name": "webpack-primary",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "build": "webpack"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "devDependencies": {
            "webpack": "^5.61.0",
            "webpack-cli": "^4.9.1"
        }
    }
```

## 基础用法

### entry

entry用于指定webpack打包的入口  

#### 用法

单入口：entry是一个字符串（单页应用）

```js
    module.exports = {
        entry: './path/to/my/entry/file.js'
    }
```

多入口：entry是一个对象（多页应用）

```js
    module.exports = {
        entry: {
            app: './src/app.js',
            helloworld: './src/helloworld.js'
        }
    }

```

### output

output用于告诉webpack如何将编译后的文件输出到磁盘

单入口

```js
    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
    }
```

多入口  

```js
    module.exports = {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: '[name].js' // 通过占位符确保文件名称唯一
        },
    }
```

### loader

webpack开箱即用只支持JS和JSON两种文件类型，通过Loaders去支持其他文件类型并且将它们转化成有效的模块，并且可以添加到依赖图中。  

本身是一个函数，接受源文件作文参数，返回转换的结果。  

#### 常用loader

![常用loader](/assets/images/common-loader.png)

#### 简单用法

```js
    const path = require('path');

    module.exports = {
        output: {
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.txt$/, // 匹配规则
                    use: 'raw-loader' // 使用loader
                }
            ]
        }
    }
```

### plugins

插件用于bundle文件的优化，资源管理和环境变量注入  

作用于整个构建过程  

#### 常用plugins

![常用loader](/assets/images/common-plugins.png)

#### 简单用法

```js
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        output: {
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ]
    }
```

### mode

mode用来指定当前构建的环境：production、development还是none。根据不同环境默认启动默认plugin。  

设置mode可以使用webpack内置的函数，默认值为production  

### 解析es6语法

安装对应插件

```shell
    npm install @babel/core @babel/preset-env babel-loader -D
```

添加babel配置文件.babelrc

```js
    {
        "presets": [
            "@babel/preset-env" // 一系列proposal集合
        ]
    }
```

### 解析React JSX

安装对应插件，因为需要演示react所以也安装 react react-dom

```shell
    npm install @babel/preset-react -D
```

添加babel配置文件.babelrc

```js
    {
        "presets": [
            "@babel/preset-react" 
        ]
    }
```

例子demo

```js
    'use strict'

    import React from "react"
    import ReactDOM from "react-dom"

    class Search extends React.Component {
        render() {
            return <div>Search Text</div>
        }
    }

    ReactDOM.render(
        <Search/>,
        document.getElementById('root')
    )
```

### 解析css

使用css-loader加载.css文件，并且转换成commonjs对象  

使用style-loader将样式通过`<style>`标签插入到head中  

安装插件

```shell
    npm install css-loader style-loader -D
```

webpack配置添加css解析所需loader

```js
'use strict'

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
```

简单demo

```js
    'use strict'

    import React from "react"
    import ReactDOM from "react-dom"
    import './assets/css/search.css'

    class Search extends React.Component {
        render() {
            return <div class="red">Search Text</div>
        }
    }

    ReactDOM.render(
        <Search/>,
        document.getElementById('root')
    )
```

```css
    .red {
        color: red;
    }
```

### 解析less

使用less-loader将less解析成css  

安装对应loader

```shell
    npm install less less-loader -D
```

在webpack配置添加less-loader

```js
'use strict'

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    }
}
```

简单demo

```js
'use strict'

import React from "react"
import ReactDOM from "react-dom"
import './assets/css/search.less'

class Search extends React.Component {
    render() {
        return <div class="red">Search Text</div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)
```

```less
.red {
    color: red;
}
```

### 解析图片和文件

使用file-loader处理文件  

安装对应loader

```shell
    npm install file-loader -D
```

webpack 添加配置

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'file-loader'
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: 'file-loader'
            }
        ]
    }
}
```

简单demo

```js
'use strict'

import React from "react"
import ReactDOM from "react-dom"
import './assets/css/search.less'
import loaderPng from "./assets/images/common-loader.png"

class Search extends React.Component {
    render() {
        return <div class="red">
            Search Text
            <img src={loaderPng} />
        </div>
    }
}

ReactDOM.render(
    <Search/>,
    document.getElementById('root')
)

```

也可以使用url-loader，两个loader功能差不多只是url-loader能够做一些小图片、小字体转成base64，并且url-loader内部也是使用file-loader的。

安装对应loader

```shell
    npm install url-loader -D
```

webpack添加配置

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240
                    }
                }]
            },
        ]
    }
}
```
