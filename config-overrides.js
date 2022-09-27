const { ProvidePlugin } = require('webpack');
const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    buffer: require.resolve('buffer')
  };

  config.plugins.push(
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser.js'
    })
  );

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./')
  ];

  return config;
};
