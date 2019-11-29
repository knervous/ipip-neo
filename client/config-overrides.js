const { useEslintRc, override } = require('customize-cra');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = override(useEslintRc(), config => {
  // Allow relative exports outside of src folder for temporary
  // module imports and modify include path for babel loader
  config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

  // Allow transpiling ES6 outside of project scope
  config.module.rules.push({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: [],
    loader: require.resolve('babel-loader'),
    options: {
      customize: require.resolve('babel-preset-react-app/webpack-overrides'),
      babelrc: false,
      configFile: false,
      presets: [require.resolve('babel-preset-react-app')],
      plugins: [
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]'
              }
            }
          }
        ]
      ],
      cacheDirectory: true
    }
  });
  return config;
});
