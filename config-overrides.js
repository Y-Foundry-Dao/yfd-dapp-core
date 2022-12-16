const { ProvidePlugin } = require('webpack');
const path = require('path');
const webpack = require('webpack');
const { aliasWebpack, aliasJest } = require('react-app-alias')
const { alias } = require('react-app-rewire-alias');

const options = {}; // default is empty for most cases

module.exports.jest = aliasJest(options)

module.exports = aliasWebpack(options)

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  alias({
    '@assets': 'src/assets',
    '@styles': 'src/assets/styles',
    '@scss': 'src/assets/styles/scss',
    '@themes': 'src/assets/styles/themes',
    '@images': 'src/assets/images',
    '@yfd': 'src/assets/images/yfd',
    '@components': 'src/components',
    '@features': 'src/features',
    '@pages': 'src/pages',
    '@layouts': 'src/layouts',
    '@routes': 'src/routes',
    '@hooks': 'src/hooks',
    '@recoil': 'src/recoil',
    '@utilities': 'src/utilities',
    '@var': 'src/utilities/variables',
    'Variables': 'src/utilities/variables/variables.ts'
  })(config);
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  config.ignoreWarnings = [/Failed to parse source map/];
  config.module.rules.push({
    test: /\.(js|mjs|jsx)$/,
    enforce: "pre",
    loader: require.resolve("source-map-loader"),
    resolve: {
      fullySpecified: false,
    },
  });
  return config;
};
