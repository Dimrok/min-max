/* eslint-disable @typescript-eslint/no-var-requires */
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  css: {},
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: './src/locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: false,
    },
  },

  configureWebpack: {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: './src/assets/favicon.ico',
        cache: true,
        favicons: {
          appName: 'MinMax',
          appDescription: 'How to min-max your life',
          lang: 'fr-FR',
          background: '#fff',
          theme_color: '#fff',
        },
      }),
    ],
  },

  chainWebpack: (config) => {
    config.optimization.minimizer('terser').tap((args) => {
      // eslint-disable-next-line no-param-reassign
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
  },
};
