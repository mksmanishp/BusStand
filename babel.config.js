module.exports = function (app) {
  app.cache(true);
  return {
    presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
    plugin: ['react-native-reanimated/plugin'],
  };
};
