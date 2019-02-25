##### 一、创建应用
```
create-react-app myApp
```

##### 二、使用sass
```
yarn add node-sass
```

##### 三、className.hash
```
import styles from './index.module.scss'
```

##### 四、路由
```
yarn add react-router-dom

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
```

##### 五、es6+ polyfill
```
yarn add react-app-polyfill

import 'react-app-polyfill/ie9';
```

##### 六、antd-mobile
```
yarn add antd-mobile
```
- 调整create-react-app webpack配置，而不使用'eject'而不创建react-scripts的分支
```
yarn add react-app-rewired
```
- 修改 package.json
```
{
  "scripts": {
    "start": "set HOST=0.0.0.0 && react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test --env=jsdom"
  }
}

```
- 按需加载组件代码和样式
```
yarn add babel-plugin-import
```
- 项目根目录创建一个 config-overrides.js 用于修改默认配置
```
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  return config;
};
```
> [react-app-rewires >= 2.1.0 用法](https://juejin.im/post/5b20a3546fb9a01e312833d5)
- antd-mobile 使用 less 
```
yarn add less-loader
```
- 使用 postcss-pxtorem 把 px 转成 rem 单位(不推荐使用)
```
yarn add postcss-pxtorem

// node-modules/react-scripts/config/webpack.config.js
// postcss-loader plugins
pxtorem({
  rootValue: 100,
  propWhiteList: [],
})
```
> [antd-mobile 高清解决方案](https://github.com/ant-design/ant-design-mobile/wiki/HD)
```
!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=a/2*s*n+"px"},e.exports=t["default"]}]);
flex(100, 1);
```
- 引用 antd-mobile 组件
```
import { Button } from 'antd-mobile';
```
- 按需加载
```
yarn add babel-plugin-syntax-dynamic-import babel-preset-react

yarn add react-loadable
```
// config-overrides.js
```
addBabelPresets(['@babel/preset-react']),
addBabelPlugin('syntax-dynamic-import'),
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
