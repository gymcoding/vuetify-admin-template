module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vuetify-admin-template/' : '/',
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify'
  ],
  runtimeCompiler: true
}
