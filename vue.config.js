module.exports = {
  baseUrl: '',
  runtimeCompiler: true,

  css: {
    sourceMap: true
  },

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
