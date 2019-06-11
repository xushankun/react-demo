const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
       libraryName: 'antd',         // 实现antd样式按需加载
       libraryDirectory: 'es',
       style: true,
   }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#0aa679' },        // less 配置antd主题颜色
    }),
);
