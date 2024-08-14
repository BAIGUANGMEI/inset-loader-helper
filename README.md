# inset-loader-helper

> [!NOTE]
>
> 对于vue-inset-loader只能适用于微信平台
> 在webpack编译之前，将platform强制改为mp-weixin

## 使用方法

本插件依赖于vue-inset-loader。

### 安装

```
npm i inset-loader-helper
```

### 配置

`vue.config.js`中原来vue-inset-loader的配置，如下：

```javascript
const path = require('path')

module.exports = {
	configureWebpack: {
		module: {
		  rules: [{
			test: /\.vue$/,
			use: [
				{
					loader: path.resolve(__dirname, './node_modules/vue-inset-loader')
				}
			]
		  }],
		},
  }
}
```

引入inset-loader-helper的包，并在`configureWebpack`中进行配置，如下：

```javascript
const path = require('path')
const PlatformOverridePlugin = require('./node_modules/inset-loader-helper');


module.exports = {
	configureWebpack: {
		plugins: [
		    new PlatformOverridePlugin('mp-weixin'), 
		],
		module: {
		  rules: [{
			test: /\.vue$/,
			use: [
				{
					loader: path.resolve(__dirname, './node_modules/vue-inset-loader')
				}
			]
		  }],
		},
  }
}
```

其中创建`PlatformOverridePlugin`这个类时可以指定需要转换的平台类型，这里默认为mp-weixin。

------

## 致谢

感谢大佬制作的vue-inset-loader，github地址：

https://github.com/1977474741/vue-inset-loader
