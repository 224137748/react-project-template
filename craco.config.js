/* craco.config.js */
const CracoLessPlugin = require('craco-less');
const WebpackBar = require('webpackbar');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');


module.exports = {
  webpack: {
    plugins: [
      new WebpackBar({ profile: true }),
      process.argv.includes('--analyze') && new BundleAnalyzerPlugin(),
    ].filter(Boolean),
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      // module.less支持
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;
          return lessRule;
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]__[hash:base64:5]'
          }
        }
      }
    },
    {
      plugin: {
        overrideCracoConfig: ({ cracoConfig }) => {
          if (typeof cracoConfig.eslint.enable !== 'undefined') {
            cracoConfig.disableEslint = !cracoConfig.eslint.enable;
          }
          delete cracoConfig.eslint;
          return cracoConfig;
        },
        overrideWebpackConfig: ({ webpackConfig, cracoConfig }) => {
          if (
            typeof cracoConfig.disableEslint !== 'undefined' &&
            cracoConfig.disableEslint === true
          ) {
            webpackConfig.plugins = webpackConfig.plugins.filter(
              instance => instance.constructor.name !== 'ESLintWebpackPlugin'
            );
          }
          return webpackConfig;
        }
      }
    },
    { plugin: AntdDayjsWebpackPlugin }
  ],
  babel: {
    // 引入babel-plugin-import，支持按需加载组件
    plugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]]
  }
};
