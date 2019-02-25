// // react-app-rewired 老方法
// const { injectBabelPlugin } = require('react-app-rewired');
// module.exports = function override(config, env) {
//   // do stuff with the webpack config...
//   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
//   return config;
// };

// react-app-rewired >= 2.1.0
const { override, addBabelPresets, addBabelPlugin, addLessLoader, fixBabelImports } = require('customize-cra');
module.exports = override(
  addBabelPresets(['@babel/preset-react']),
  addBabelPlugin('syntax-dynamic-import'),
  addLessLoader({
    strictMath: true,
    noIeCompat: true
  }),
  fixBabelImports(
    'import', 
    { libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css' }
  )
);
