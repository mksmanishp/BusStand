const plugin = require('tailwindcss');
const {preset} = require('./jest.config');

module.exports = function (app) {
  app.cache(true);
  return {
    presets: ['module:@react-native/babel-presets', 'nativewind/babel'],
    plugin: ['react-native-reanimated/plugin'],
  };
};
