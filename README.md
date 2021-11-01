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

    }

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
